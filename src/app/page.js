"use client";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Content";
import ChatBot from "../components/ChatBot/ChatBot";
import SideMenu from "../components/SideMenu/SideMenu";
import BottomBar from "@/components/BottomBar/BottomBar"
import Lamp from "@/components/ui/Lamp"
import { Counter } from "../lib/features/counter/Counter";

export default function Home() {
  return (
    <div className="bg-bgdark">
        <Navbar></Navbar>
        {/* <Content></Content> */}
        {/* <ChatBot></ChatBot> */}
        <Lamp></Lamp>

        {/* <SideMenu></SideMenu> */}

      <Footer></Footer>
      <BottomBar></BottomBar>
      
    </div>
  );
}
