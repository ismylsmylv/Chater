# AI Chatbot 

## Overview

This repository contains an AI Chatbot built using **Next.js** and **TypeScript**, with the conversational AI powered by **Gemini**. The project aims to deliver an interactive and scalable chatbot interface, capable of handling real-time queries, dynamic responses, and seamless integration into web applications.

## Features

- **Responsive Design:** Fully optimized for desktop and mobile devices.
- **Real-time Interaction:** Instant responses using Gemini's advanced AI capabilities.
- **Scalability:** Server-side rendering (SSR) and static site generation (SSG) for performance optimization.
- **TypeScript Integration:** Ensures type safety and enhances developer productivity.

## Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Gemini API Key** (available from Gemini's developer portal)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ismylsmylv/Chater
   cd Chater
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).


## Key Technologies

- **Next.js:** Framework for server-rendered React applications.
- **TypeScript:** Ensures robust and scalable code.
- **Gemini API:** Provides the AI capabilities for chatbot responses.
- 
## How It Works

1. **User Input:** Users interact with the chatbot through a sleek UI.
2. **API Integration:** The chatbot sends user queries to the Gemini API.
3. **Dynamic Response:** Gemini processes the input and returns an appropriate response.
4. **Rendering:** Responses are displayed in real-time using React state management.

## Deployment

For production, build the application and deploy it to your hosting provider:

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

3. Deploy the `.next` folder to your hosting platform (e.g., Vercel, Netlify, AWS).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Gemini API Documentation](https://gemini.dev/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
