"use client";

import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import "./style.scss";
import { FaArrowTurnUp } from "react-icons/fa6";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Image from "next/image";
import GeminiImg from "./../../../public/img/gemini_logo.png";
const genAi = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_API as string
);

const model = genAi.getGenerativeModel({
  model: "gemini-1.5-pro",
});
type Props = {};
function HomeView({}: Props) {
  const [message, setmessage] = useState("");
  const [chat, setchat] = useState([] as any);
  function sendMessage(message: string) {
    setchat((prevChat: object[]) => [
      ...prevChat,
      { type: "sent", text: message },
    ]);

    console.log(chat, "sent");
    console.log(message);
    setmessage("");
    displayResponse();
  }

  async function displayResponse() {
    try {
      const r = await model.generateContent(message);
      console.log(r.response.text());
      setchat((prevChat: object[]) => [
        ...prevChat,
        { type: "recieved", text: r.response.text() },
      ]);
      console.log(chat, "recieve");
      setmessage("");
    } catch (error) {
      console.error("Error generating content:", error);
    }
  }
  return (
    <div className=" HomeView container flex justify-between items-center flex-col h-screen p-4">
      {chat.length > 0 ? (
        <div className="chat">
          {chat.map((chat: { type: string; text: string }) => {
            return (
              <div key={uuidv4()}>
                {chat.type == "recieved" && (
                  <Image
                    src={GeminiImg}
                    height={20}
                    width={20}
                    alt="gemini icon"
                    className="mb-4"
                  />
                )}
                <div className={`bubble  ${chat.type}`}>
                  <p className="rounded-lg">{chat.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="placeholder">
          Ask anything to <a href="https://gemini.google.com/app">Gemini</a>
        </h1>
      )}
      <div>
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

        <div className="alert">
          Gemini may display inaccurate info, including about people, so
          double-check its responses.
          <a href="https://support.google.com/gemini/">
            Your privacy & Gemini Apps
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
