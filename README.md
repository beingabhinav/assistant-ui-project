# AI Assistant Web App 🤖💬

A modern AI-powered web application built with [Next.js](https://nextjs.org) and
[assistant-ui](https://www.assistant-ui.com), providing an interactive chat
experience backed by the OpenAI API.

## 🔹 About the Project
This project is a web-based AI assistant that lets users interact with an AI
model through a clean, responsive chat interface. It demonstrates the use of
**modern frontend frameworks**, **API integration**, and **secure environment
variable management**.

The project focuses on building real-world skills such as:
- API handling
- Component-based UI
- Environment configuration
- Scalable project structure

## 🔹 Features
- Interactive AI chat interface
- Built with the modern Next.js App Router
- Clean and responsive UI (Tailwind CSS v4 + shadcn-style primitives)
- Secure API key handling via environment variables
- Easy to extend with additional AI features and providers

## 🔹 Tech Stack
- Next.js 15 (App Router, Turbopack)
- React 19
- TypeScript 5
- Tailwind CSS v4
- [@assistant-ui/react](https://www.assistant-ui.com)
- Vercel AI SDK (`ai`) + `@ai-sdk/openai`

## 🔹 Getting Started

### Prerequisites
- Node.js 20+ (Node 22 recommended)
- An OpenAI API key

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/beingabhinav/assistant-ui-project.git
   cd assistant-ui-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the example env file and set your OpenAI API key:
   ```bash
   cp .env.example .env.local
   # then edit .env.local and set OPENAI_API_KEY=sk-...
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔹 Scripts
- `npm run dev` — start the development server (Turbopack)
- `npm run build` — create a production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint via `next lint`

## 🔹 Project Layout
```
app/                  # Next.js App Router entry points
  api/chat/route.ts   # streamText chat endpoint (OpenAI)
  assistant.tsx       # Assistant runtime + layout
  page.tsx            # Home route
  layout.tsx          # Root layout
components/
  assistant-ui/       # assistant-ui composed components
  ui/                 # shadcn-style primitives
hooks/
lib/utils.ts
```

## 🔹 Environment Variables

| Name                              | Required | Description                                          |
| --------------------------------- | :------: | ---------------------------------------------------- |
| `OPENAI_API_KEY`                  |   Yes    | OpenAI API key used by `/api/chat`                   |
| `NEXT_PUBLIC_ASSISTANT_BASE_URL`  |   No     | Optional assistant-ui cloud base URL for persistence |
