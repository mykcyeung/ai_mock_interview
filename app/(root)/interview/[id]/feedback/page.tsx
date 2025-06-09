import { getCurrectUser } from '@/lib/actions/auth.action'
import { getFeedbackByInterviewId, getInterviewById } from '@/lib/actions/general.action';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({ params }: RouteParams) => {
  const { id } = await params
  const user = await getCurrectUser();

  const interview = await getInterviewById(id);

  if (!interview) redirect('/')
  
  const feecback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!
  })


  return (
    <div>page</div>
  )
}

export default page