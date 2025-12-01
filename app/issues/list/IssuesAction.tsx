import { Button, Flex, ThemePanel } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssueFilterByStatus from './IssueFilterByStatus'

const IssuesAction = () => {
  return (
    
      <Flex justify="between" mb="5">
      
      <IssueFilterByStatus/>
     
      <Button>
        <Link href="/issues/new">New Issues</Link>
      </Button>
      </Flex>
      
  )
}

export default IssuesAction