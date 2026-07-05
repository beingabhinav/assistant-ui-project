import { createOpenAI } from "@ai-sdk/openai";
import { frontendTools } from "@assistant-ui/react-ai-sdk";
import {
  type JSONSchema7,
  streamText,
  convertToModelMessages,
  type UIMessage,
} from "ai";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  const {
    messages,
    system,
    tools,
  }: {
    messages: UIMessage[];
    system?: string;
    tools?: Record<string, { description?: string; parameters: JSONSchema7 }>;
  } = await req.json();

  const result = streamText({
    model: groq.chat("llama-3.3-70b-versatile"),
    messages: await convertToModelMessages(messages),
    system,
    tools: {
      ...frontendTools(tools ?? {}),
    },
  });

  return result.toUIMessageStreamResponse();
}
