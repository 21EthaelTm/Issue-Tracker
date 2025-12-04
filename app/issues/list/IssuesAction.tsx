import { Button, Flex, ThemePanel } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssueFilterByStatus from './IssueFilterByStatus'
import { getServerSession } from "next-auth";
import authoption from "@/app/auth/authoption";
const IssuesAction = async () => {
  const session = await getServerSession(authoption);
  return (
    
      <Flex justify="between" mb="5">
      
      <IssueFilterByStatus/>
     
     {session && <Button>
        <Link href="/issues/new">New Issues</Link>
      </Button>}
      </Flex>
      
  )
}

export default IssuesAction