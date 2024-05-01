"use client";
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import IconSideMenu from "@/components/IconSideMenu/IconSideMenu";
import Image from "next/image";
// import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./chat.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Conversation,
  ConversationList,
  Avatar,
  Sidebar,
  Search,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  TypingIndicator,
  MessageSeparator,
  ExpansionPanel,
} from "@chatscope/chat-ui-kit-react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(true);
  const [activeConversation, setActiveConversation] = useState("Zoe");
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState({
    Zoe: [
      // {
      //   type: "separator",
      //   props: {
      //     content: "Saturday, 30 November 2019",
      //   },
      // },
      {
        direction: "incoming",
        message: "Hello! How can I help you?",
        position: "single",
        sender: "Zoe",
        sentTime: "15 mins ago",
      },
    ],
    Lilly: [
      {
        direction: "incoming",
        message: "Hello! How can I help you?",
        position: "single",
        sender: "Lilly",
        sentTime: "15 mins ago",
      },
    ],
    Joe: [],
    Emily: [],
    Kai: [],
    Akane: [],
    Eliot: [],
    Patrik: [],
  });

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [activeConversation]: [
        ...prevMessages[activeConversation],
        {
          direction: "outgoing",
          message: message,
          position: "single",
          sender: "You",
          sentTime: "Just now",
        },
      ],
    }));
  };

  const handleConversationClick = (conversationName) => {
    setActiveConversation(conversationName);
    setOpen(false); // Close the sidebar on conversation click
  };

  const conversations = [
    {
      name: "Lilly",
      status: "available",
      lastMessage: "Yes i can do it for you",
      info: "Active 10 mins ago",
      avatar: "/MrByte1.png",
    },
    {
      name: "Joe",
      status: "dnd",
      lastMessage: "Yes i can do it for you",
      info: "Active 10 mins ago",
      avatar: "/MrByte1.png",
    },
    {
      name: "Emily",
      status: "available",
      lastMessage: "Yes i can do it for you",
      info: "Active 10 mins ago",
      avatar: "/MrByte1.png",
    },
    {
      name: "Kai",
      status: "unavailable",
      lastMessage: "Yes i can do it for you",
      info: "Active 10 mins ago",
      avatar: "/MrByte1.png",
    },
    {
      name: "Akane",
      status: "eager",
      lastMessage: "Yes i can do it for you",
      info: "Active 10 mins ago",
      avatar: "/MrByte1.png",
    },
    {
      name: "Eliot",
      status: "away",
      lastMessage: "Yes i can do it for you",
      info: "Active 10 mins ago",
      avatar: "/MrByte1.png",
    },
    {
      name: "Zoe",
      status: "dnd",
      lastMessage: "Yes i can do it for you",
      info: "Active 10 mins ago",
      avatar: "/Zippy Zoe.png",
    },
    {
      name: "Patrik",
      status: "invisible",
      lastMessage: "Yes i can do it for you",
      info: "Active 10 mins ago",
      avatar: "/MrByte1.png",
    },
  ];

  const sidebarInfo = {
    Zoe: [
      {
        title: "INFO",
        content:
          "Zippy Zoe\nA friendly bot\nAvg rating: 4.8\na futuristic friend",
      },
      { title: "LOCALIZATION", content: "Lorem ipsum" },
      { title: "MEDIA", content: "Lorem ipsum" },
      { title: "SURVEY", content: "Lorem ipsum" },
      { title: "OPTIONS", content: "Lorem ipsum" },
    ],
    Lilly: [
      { title: "INFO", content: "Lilly's INFO\nInfo specific to Lilly" },
      {
        title: "LOCALIZATION",
        content: "Lilly's LOCALIZATION\nLocalization specific to Lilly",
      },
      { title: "MEDIA", content: "Lilly's MEDIA\nMedia specific to Lilly" },
      { title: "SURVEY", content: "Lilly's SURVEY\nSurvey specific to Lilly" },
      {
        title: "OPTIONS",
        content: "Lilly's OPTIONS\nOptions specific to Lilly",
      },
    ],
    Joe: [
      { title: "INFO", content: "Joe's INFO\nInfo specific to Joe" },
      {
        title: "LOCALIZATION",
        content: "Joe's LOCALIZATION\nLocalization specific to Joe",
      },
      { title: "MEDIA", content: "Joe's MEDIA\nMedia specific to Joe" },
      { title: "SURVEY", content: "Joe's SURVEY\nSurvey specific to Joe" },
      { title: "OPTIONS", content: "Joe's OPTIONS\nOptions specific to Joe" },
    ],
    Emily: [
      { title: "INFO", content: "Emily's INFO\nInfo specific to Emily" },
      {
        title: "LOCALIZATION",
        content: "Emily's LOCALIZATION\nLocalization specific to Emily",
      },
      { title: "MEDIA", content: "Emily's MEDIA\nMedia specific to Emily" },
      { title: "SURVEY", content: "Emily's SURVEY\nSurvey specific to Emily" },
      {
        title: "OPTIONS",
        content: "Emily's OPTIONS\nOptions specific to Emily",
      },
    ],
    Kai: [
      { title: "INFO", content: "Kai's INFO\nInfo specific to Kai" },
      {
        title: "LOCALIZATION",
        content: "Kai's LOCALIZATION\nLocalization specific to Kai",
      },
      { title: "MEDIA", content: "Kai's MEDIA\nMedia specific to Kai" },
      { title: "SURVEY", content: "Kai's SURVEY\nSurvey specific to Kai" },
      { title: "OPTIONS", content: "Kai's OPTIONS\nOptions specific to Kai" },
    ],
    Akane: [
      { title: "INFO", content: "Akane's INFO\nInfo specific to Akane" },
      {
        title: "LOCALIZATION",
        content: "Akane's LOCALIZATION\nLocalization specific to Akane",
      },
      { title: "MEDIA", content: "Akane's MEDIA\nMedia specific to Akane" },
      { title: "SURVEY", content: "Akane's SURVEY\nSurvey specific to Akane" },
      {
        title: "OPTIONS",
        content: "Akane's OPTIONS\nOptions specific to Akane",
      },
    ],
    Eliot: [
      { title: "INFO", content: "Eliot's INFO\nInfo specific to Eliot" },
      {
        title: "LOCALIZATION",
        content: "Eliot's LOCALIZATION\nLocalization specific to Eliot",
      },
      { title: "MEDIA", content: "Eliot's MEDIA\nMedia specific to Eliot" },
      { title: "SURVEY", content: "Eliot's SURVEY\nSurvey specific to Eliot" },
      {
        title: "OPTIONS",
        content: "Eliot's OPTIONS\nOptions specific to Eliot",
      },
    ],
    Patrik: [
      { title: "INFO", content: "Patrik's INFO\nInfo specific to Patrik" },
      {
        title: "LOCALIZATION",
        content: "Patrik's LOCALIZATION\nLocalization specific to Patrik",
      },
      { title: "MEDIA", content: "Patrik's MEDIA\nMedia specific to Patrik" },
      {
        title: "SURVEY",
        content: "Patrik's SURVEY\nSurvey specific to Patrik",
      },
      {
        title: "OPTIONS",
        content: "Patrik's OPTIONS\nOptions specific to Patrik",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black w-full flex flex-col">
      <Navbar />
      <div className={`text-center text-white text-2xl pt-4 flex`}>
        <div
          className="z-10 px-2"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i
            className={`px-4 cursor-pointer  bg-black fa-solid ${
              open ? "fa-arrow-left fixed" : "fa-bars absolute"
            }`}
          ></i>
        </div>
        <h1 className="grow text-center">Chats</h1>
      </div>
      <IconSideMenu isOpen={open}></IconSideMenu>

      <div className={`${open && "pl-20"} m-4 bg-black`}>
        <MainContainer
          responsive
          style={{
            height: "500px",
          }}
        >
          <Sidebar
            style={{ background: "black", color: "white" }}
            position="left"
            open={open}
            onClose={() => setOpen(false)}
          >
            <Search
              placeholder="Search..."
              value={value}
              onChange={(v) => setValue(v)}
              onClearClick={() => setValue("")}
            />
            <ConversationList style={{ background: "black", color: "white" }}>
              {conversations.map((conversation, index) => (
                <Conversation
                  style={{ background: "black" }}
                  key={index}
                  info={<span className="text-white">{conversation.info}</span>}
                  lastSenderName={
                    <span className="text-white">{conversation.name}</span>
                  }
                  name={<span className="text-white">{conversation.name}</span>}
                  onClick={() => handleConversationClick(conversation.name)} // Handle conversation click
                >
                  <Avatar
                    name={conversation.name}
                    src={conversation.avatar}
                    status={conversation.status}
                    style={{ color: "white" }}
                  />
                </Conversation>
              ))}
            </ConversationList>
          </Sidebar>
          <ChatContainer>
            <ConversationHeader style={{ background: "black", color: "white" }}>
              <ConversationHeader.Back onClick={() => setOpen1(false)} />
              <Avatar
                name={activeConversation}
                src={
                  conversations.find((conv) => conv.name === activeConversation)
                    ?.avatar
                }
              />
              <ConversationHeader.Content
                info={
                  <span className="text-white bg-black">
                    {
                      conversations.find(
                        (conv) => conv.name === activeConversation
                      )?.info
                    }
                  </span>
                }
                userName={
                  <span className="text-white bg-black">
                    {activeConversation}
                  </span>
                }
              />
              <ConversationHeader.Actions>
                <VoiceCallButton />
                <VideoCallButton />
                <InfoButton />
              </ConversationHeader.Actions>
            </ConversationHeader>

            <MessageList
              className="!bg-black"
              typingIndicator={
                <TypingIndicator
                  className="!bg-black"
                  content={`${activeConversation} is typing`}
                />
              }
            >
              {messages[activeConversation].map((msg, index) => (
                <>
                  <Message key={index} model={msg}>
                    {msg.direction === "incoming" && (
                      <Avatar
                        name={msg.sender}
                        src={
                          conversations.find(
                            (conv) => conv.name === activeConversation
                          )?.avatar
                        }
                      />
                    )}
                    <Message.Footer
                      sender={<span className="text-white">{msg.sender}</span>}
                      sentTime={
                        <span className="text-white">{msg.sentTime}</span>
                      }
                    />
                  </Message>
                </>
              ))}
            </MessageList>
            <MessageInput
              className="!bg-black"
              placeholder="Type message here"
              onSend={handleSendMessage}
              ref={inputRef}
              autoFocus
            />
          </ChatContainer>
          <Sidebar
            style={{ background: "black ", color: "white" }}
            position="right"
            open={open1}
            onClose={() => setOpen1(false)}
          >
            {sidebarInfo[activeConversation].map((item, index) => (
              <ExpansionPanel
                key={index}
                title={
                  <span className="text-white bg-black">{item.title}</span>
                }
              >
                <p className="text-white bg-black">{item.content}</p>
              </ExpansionPanel>
            ))}
          </Sidebar>
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
