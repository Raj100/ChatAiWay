"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CharacterBox from "@/components/ui/CharacterBox";
import Image from "next/image";
import { useState } from "react";
import IconSideMenu from "@/components/IconSideMenu/IconSideMenu";

const page = () => {
  let [open,setOpen]=useState(false);
  return (
    <main className="bg-black">
      <Navbar></Navbar>
      <div className={`${open && "ml-20"} text-center text-white bg-black text-2xl pt-4 flex`}>
        <div onClick={()=>{setOpen(!open);}} ><i class={`px-4 cursor-pointer fa-solid ${open ? "fa-arrow-left" :"fa-bars"}`}></i></div>
      <h1 className="grow">Choose Your Character</h1>
      </div>
      <IconSideMenu isOpen={open}></IconSideMenu>
      <div className={`${open && "ml-20"} bg-black flex flex-wrap h-full gap-8 p-4 lg:p-8 items-center justify-center`}>
        <CharacterBox image="/MrByte.png" charname="Professor Byte" description="An intellectual powerhouse, Byte is fueled by curiosity and a
            passion for knowledge. With a scholarly demeanor and a knack for
            deep conversations, he inspires others to explore the wonders of
            science and technology." link="Chat"/>
            <CharacterBox image="/Intellectual and Curious Character1.webp" charname="Oliver Curious" description="Brimming with boundless curiosity, Oliver is a perpetual seeker of
            knowledge and adventure. With an insatiable thirst for discovery, she
            invites others on a journey of exploration, sparking excitement and
            wonder in every conversation." link="Chat"/>
            <CharacterBox image="/Intellectual and Curious Character1.webp" charname="Oliver Curious" description="Brimming with boundless curiosity, Oliver is a perpetual seeker of
            knowledge and adventure. With an insatiable thirst for discovery, she
            invites others on a journey of exploration, sparking excitement and
            wonder in every conversation." link="Chat"/>
            <CharacterBox image="/Intellectual and Curious Character1.webp" charname="Oliver Curious" description="Brimming with boundless curiosity, Oliver is a perpetual seeker of
            knowledge and adventure. With an insatiable thirst for discovery, she
            invites others on a journey of exploration, sparking excitement and
            wonder in every conversation." link="Chat"/>
            <CharacterBox image="/Intellectual and Curious Character1.webp" charname="Oliver Curious" description="Brimming with boundless curiosity, Oliver is a perpetual seeker of
            knowledge and adventure. With an insatiable thirst for discovery, she
            invites others on a journey of exploration, sparking excitement and
            wonder in every conversation." link="Chat"/>
            <CharacterBox image="/Intellectual and Curious Character1.webp" charname="Oliver Curious" description="Brimming with boundless curiosity, Oliver is a perpetual seeker of
            knowledge and adventure. With an insatiable thirst for discovery, she
            invites others on a journey of exploration, sparking excitement and
            wonder in every conversation." link="Chat"/>
            <CharacterBox image="/Intellectual and Curious Character1.webp" charname="Oliver Curious" description="Brimming with boundless curiosity, Oliver is a perpetual seeker of
            knowledge and adventure. With an insatiable thirst for discovery, she
            invites others on a journey of exploration, sparking excitement and
            wonder in every conversation." link="Chat"/>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default page;
