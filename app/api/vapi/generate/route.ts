import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";
import {generateText} from "ai"

export async function GET() {
  return Response.json({ success: true, data: 'THANK YOU' }, { status: 200 });
}

export async function POST(request: Request) {
  const {type, role, level, techstackm, amount, userid} = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: 'Prepare questions for a job interview... '
    })

    const interview = {
      role, type, level,
      techstack: techstackm.split(','),
      quesions: JSON.parse(questions),
      userId: userid,
      finialized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString()
    }

    await db.collection('interviews').add(interview)

    return Response.json({ success: true }, {status: 200})
  } catch (error) {
    console.error(error);
    
    return Response.json({success:false, error}, {status: 500})
  }
}