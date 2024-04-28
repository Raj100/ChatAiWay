"use client";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Content";
import ChatBot from "../components/ChatBot/ChatBot";
import SideMenu from "../components/SideMenu/SideMenu";
import BottomBar from "@/components/BottomBar/BottomBar";
import Lamp from "@/components/ui/Lamp";
import RotatingImages from "@/components/RotatingImages/RotatingImages";
import Image from "next/image";

export default function Home() {
  const myImages = [
    "/MrByte.png",
    "/Youthful and Energetic Character1.png",
    "/Zippy Zoe.png",
    "/Intellectual and Curious Character1.webp",
    "/Empathetic and Supportive Character2.jpeg",
  ];
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      {/* <Content></Content> */}
      {/* <ChatBot></ChatBot> */}
      <Lamp></Lamp>

      {/* <SideMenu></SideMenu> */}
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0 text-white px-2 lg:px-8">
        <RotatingImages></RotatingImages>
        <div className="flex justify-center items-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus at in perferendis inventore sit officiis quos repellendus commodi porro! Libero adipisci ullam sit doloremque nobis autem laudantium excepturi natus placeat maxime!</p>
        </div>
      </div>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 text-white gap-20 md:gap-0 px-2 lg:px-8 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl">Features</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus rerum explicabo? Iste possimus ipsa non, provident tempora dolorem cumque earum aliquam optio vero hic corrupti quaerat, laboriosam autem odit iure id?</p>
        </div>
        <div className="flex items-center justify-center">
        <Image
          className=""
            src="/Zippy Zoe.png"
            width={400}
            height={400}
            alt="Large Image"
          />
        </div>
      </div>
      <BottomBar></BottomBar>
      <Footer></Footer>
      <BottomBar></BottomBar>
    </div>
  );
}
