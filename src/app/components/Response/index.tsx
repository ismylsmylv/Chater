import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactMarkdown from "react-markdown";
import "./style.scss";
type Props = {
  id: string;
  chat?: Array<{ text: string; time: number; type: string }>;
};
function Response({ chat }: Props) {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [loading, setloading] = useState(false);
  useEffect(() => {
    scrollToBottom();
    if (chat?.[chat?.length - 1]?.type === "question") {
      setloading(true);
    } else {
      setloading(false);
    }
  }, [chat]);

  // Create typing state for all "answer" messages
  const [typingStates, setTypingStates] = useState<{ [key: number]: string }>(
    {}
  );
  const [typingIndexes, setTypingIndexes] = useState<{ [key: number]: number }>(
    {}
  );

  useEffect(() => {
    chat?.forEach((message, index) => {
      if (message.type === "answer" && !(index in typingStates)) {
        setTypingStates((prev) => ({
          ...prev,
          [index]: ""
        }));
        setTypingIndexes((prev) => ({
          ...prev,
          [index]: 0
        }));
      }
    });
  }, [chat]);

  useEffect(() => {
    Object.keys(typingIndexes).forEach((key) => {
      const index = Number(key);
      const message = chat?.[index];
      if (
        message?.type === "answer" &&
        typingIndexes[index] < message.text.length
      ) {
        const timeout = setTimeout(() => {
          setTypingStates((prev) => ({
            ...prev,
            [index]: message.text.slice(0, typingIndexes[index] + 1)
          }));
          setTypingIndexes((prev) => ({
            ...prev,
            [index]: typingIndexes[index] + 1
          }));
        }, 10); // Adjust typing speed here
        return () => clearTimeout(timeout);
      }
    });
  }, [typingIndexes, chat]);

  return (
    <div className="Response ">
      {/* {JSON.stringify(loading)} */}

      <div className="chat">
        {chat?.map((message, index) =>
          message.type === "answer" ? (
            <div className={"bubble " + message.type} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ReactMarkdown>{typingStates[index]}</ReactMarkdown>
              </motion.div>
            </div>
          ) : (
            <div className={"bubble " + message.type} key={index}>
              {message.text}
            </div>
          )
        )}
      </div>
      {loading && (
        <div className="skeleton">
          <SkeletonTheme>
            <Skeleton
              height={20}
              width={"70%"}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton
              height={20}
              width={"50%"}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton
              height={20}
              width={"60%"}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton
              height={20}
              width={"45%"}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton
              height={20}
              width={"55%"}
              style={{ marginBottom: "10px" }}
            />
          </SkeletonTheme>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
export default Response;
