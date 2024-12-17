import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chater AI Chatbot",
  description:
    "Chat with our advanced Gemini AI chatbot for instant answers, creative writing assistance, and insightful conversations",
  keywords: [
    "gemini",
    "ai",
    "chatbot",
    "artificial intelligence",
    "conversational ai",
    "natural language processing"
  ],
  authors: [{ name: "ismylsmylv", url: "https://ismylsmylv.com/" }],
  creator: "Ismayil Ismayilov",
  publisher: "ismylsmylv",
  robots: {
    index: true,
    follow: true
  },
  //  Verification: If you're verifying with Google Search Console, Pinterest, etc.
  verification: {
    google: "your_google_verification_code"
    // ...other verification codes
  },

  //  Other optional metadata:
  applicationName: "Chater AI Chatbot" // If it's a web app
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
