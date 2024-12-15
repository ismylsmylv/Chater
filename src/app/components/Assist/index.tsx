import { FaCircleArrowUp } from "react-icons/fa6";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { messages } from "./messages";
import "./style.scss";

import { useEffect, useState } from "react";
import Response from "../../components/Response";
import { keepTheme } from "@/app/utils/theme";
export const sampleText =
  "ReactJS, often just called React, is a popular JavaScript library for building user interfaces (UIs), particularly for single-page applications (SPAs). It's maintained by ";
const genAi = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_API as string
);
const model = genAi.getGenerativeModel({
  // model: "gemini-1.5-pro"
  model: "gemini-1.5-flash-002"
});
type Message = {
  text: string;
  time: number;
  type: string;
};
function Assist() {
  const [chat, setChat] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const handleSubmit = (message: string) => {
    if (message.trim()) {
      const userMessage: Message = {
        text: message.trim(),
        time: Date.now(),
        type: `question`
      };

      setChat((prevChat) => [...prevChat, userMessage]);
      setMessage("");
      displayResponse(message.trim()); // Pass the user's message
    }
  };

  const handleTemplate = (message: string) => {
    handleSubmit(message);
  };
  const displayResponse = async (userInput: string) => {
    try {
      const aiGeneratedResponse = await model.generateContent(userInput);
      const aiMessage: Message = {
        text: aiGeneratedResponse.response.text(),
        // text: "aiGeneratedResponse.response.text()",
        time: Date.now(),
        type: "answer"
      };

      setChat((prevChat) => [...prevChat, aiMessage]);
    } catch (error) {
      console.error("Error generating content:", error);
      const errorMessage: Message = {
        text: "Sorry, I couldn't process your request. Please try again.",
        time: Date.now(),
        type: "error"
      };
      setChat((prevChat) => [...prevChat, errorMessage]);
    }
  };
  useEffect(() => {
    keepTheme();
  });
  return (
    <>
      <div
        className="Assist container"
        style={{
          height: window.innerHeight - 80
        }}
      >
        {chat.length > 0 ? (
          <Response chat={chat} id={""} />
        ) : (
          <>
            <h1 className="placeholder">
              {" "}
              Ask anything to <a href="https://gemini.google.com/app">
                Gemini
              </a>{" "}
            </h1>
            <div className="messages">
              <div className="mySwiper">
                {messages.map((message, i) => {
                  if (i < 3) {
                    i++;

                    return (
                      <div
                        className="message"
                        onClick={() => {
                          handleTemplate(message);
                        }}
                      >
                        {message}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </>
        )}
        <form
          className="textarea"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(message);
          }}
        >
          <input
            type="text"
            placeholder="Type your question"
            value={message}
            autoFocus
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(message);
            }}
          >
            <FaCircleArrowUp />
          </button>
        </form>
      </div>
    </>
  );
}

export default Assist;
