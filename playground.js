require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAi = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API);

const model = genAi.getGenerativeModel({
    model: "gemini-1.5-pro",
});

async function displayResponse() {
    try {
        const r = await model.generateContent("Top 10 programming languages");
        console.log(r.response.text());
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

displayResponse();

