// import React from 'react'

// const page = () => {
//   return (
//     <>
//       <div className='grid grid-cols-4'>
//         <div className=''>

//         </div>

//       </div>
//     </>
//   )
// }

// export default page

'use client';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile, updateProfile } from '../../lib/features/profile/profileSlice';
import supabase from '../supabase';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const page = ()=>{
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const profile = useSelector(state => state.profile.profile);
  const [isLoading, setIsLoading] = useState(false); // State to track loading state

  // State to track form input values
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]); // Fetch profile whenever user changes

  const fetchProfile = async () => {
    setIsLoading(true); 
    try {
      const { data: userProfile, error } = await supabase.from('Profiles').select().eq('email', user.email).single();
      if (error) {
        throw error;
      }
      dispatch(setProfile(userProfile));
      if (userProfile) {
        setName(userProfile.name);
        setGender(userProfile.gender);
        setAge(userProfile.age.toString());
      }
    } catch (error) {
      console.error('Profile fetch error:', error.message);
      // Handle profile fetch error
    } finally {
      setIsLoading(false); // Set loading state to false after fetching
    }
  };

  const handleUpdateProfile = () => {
    const updatedProfile = {
      name,
      gender,
      age: parseInt(age),
    };
    dispatch(updateProfile(updatedProfile));
  };

  return (
    <>
    <Navbar/>
    <div>
      <h2>User Profile</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : profile ? (
        <div>
          {user && (
            <>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </>
          )}
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} />
          <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
          <button onClick={handleUpdateProfile}>Update Profile</button>
        </div>
      ) : (
        <p>No profile available.</p>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default page

