"use client";
import React, { useState } from "react";
import "./style.scss";
import { FaArrowTurnUp } from "react-icons/fa6";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API);

const model = genAi.getGenerativeModel({
  model: "gemini-1.5-pro",
});
type Props = {};
function HomeView({}: Props) {
  const [message, setmessage] = useState("");
  const [response, setresponse] = useState("");
  const chat = [
    {
      type: "sent",
      text: "asdf",
    },
    {
      type: "recieved",
      text: "asdf",
    },
    {
      type: "sent",
      text: "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf",
    },
    {
      type: "recieved",
      text: "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf",
    },
    {
      type: "sent",
      text: "sent",
    },
    {
      type: "recieved",
      text: "asdf",
    },
    {
      type: "sent",
      text: "asdf",
    },
  ];
  async function displayResponse() {
    try {
      const r = await model.generateContent(message);
      console.log(r.response.text());
      setresponse(r.response.text());
      setmessage("");
    } catch (error) {
      console.error("Error generating content:", error);
    }
  }
  function sendMessage(message: string) {
    displayResponse();
    console.log(message);
  }
  return (
    <div className=" HomeView container flex justify-between items-center flex-col h-screen p-4">
      {!response ? (
        <div className="chat">
          {chat.map((chat) => {
            return (
              <div key={chat.text} className={`bubble  ${chat.type}`}>
                <p className="rounded-lg">{chat.text}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="placeholder">
          Ask anything to <a href="https://gemini.google.com/app">Gemini</a>
        </h1>
      )}
      <form
        className="input flex justify-between items-center rounded-full"
        action={() => {
          sendMessage(message);
        }}
      >
        <input
          type="text"
          placeholder="Enter message"
          onChange={(e) => {
            setmessage(e.target.value);
          }}
          value={message}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            sendMessage(message);
          }}
        >
          <FaArrowTurnUp />
        </button>
      </form>
    </div>
  );
}

export default HomeView;
