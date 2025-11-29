import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuesAction = () => {
  return (
    <div className="mb-3">
      <Button>
        <Link href="/issues/new">New Issues</Link>
      </Button>
      </div>
  )
}

export default IssuesAction