import Agent from '@/components/Agent'
import React from 'react'
import { getCurrectUser } from '@/lib/actions/auth.action'

const page = async () => {
  const user = await getCurrectUser();
  
  return (
    <>  
      <h3 className=''>
        Interview Generation
      </h3>

      <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  )
}

export default page