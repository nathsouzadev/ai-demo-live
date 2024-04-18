import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(String(process.env.GEMINI_API_KEY));

export async function POST(req: Request) {
  try {

    const body = await req.json();
    const { message } = body;

    if (!genAI) {
      return new NextResponse('GeminiAI API Key not configured', {
        status: 500,
      });
    }

    if (!message) {
      return new NextResponse('Message is required', { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    const result = await model.generateContent(message)

    return NextResponse.json(result.response.text());
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
