import { Button } from '@radix-ui/themes'
import React from 'react'
import { number } from 'zod'

const DeleteIssueButton = ({IssueId}:{IssueId:number}) => {
  return (
    <Button color="red">Detele Issue</Button>
  )
}

export default DeleteIssueButton