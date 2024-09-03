"use client";
import React, { useState } from "react";
import "./style.scss";
import { FaArrowTurnUp } from "react-icons/fa6";
type Props = {};

function HomeView({}: Props) {
  const [message, setmessage] = useState("");
  const [response, setresponse] = useState("");
  function sendMessage(message: string) {
    setmessage("");
    console.log(message);
  }
  return (
    <div className=" HomeView container flex justify-between items-center flex-col h-screen p-4">
      {response ? (
        <div className="response">{response}</div>
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
