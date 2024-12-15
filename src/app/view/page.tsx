"use client";

import "./style.scss";

import { GoogleGenerativeAI } from "@google/generative-ai";
import Assist from "../components/Assist";
const genAi = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_API as string
);

const model = genAi.getGenerativeModel({
  model: "gemini-1.5-pro"
});

type Props = {};

function HomeView({}: Props) {
  return (
    <div className="HomeView">
      <Assist />
    </div>
  );
}

export default HomeView;
