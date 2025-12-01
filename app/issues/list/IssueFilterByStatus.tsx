import { Status } from '@/app/generated/prisma/enums'
import { Select} from '@radix-ui/themes'
import React from 'react'

const status:{label:string,Value?:Status}[] =[
    {label:'All'},
    {label:'Open',Value:'open'},
    {label:'Closed',Value:'closed'},
    {label:'On_Progress',Value:'In_progress'}
]

const IssueFilterByStatus = () => {
  return (
    <Select.Root  size="3">
        <Select.Trigger  placeholder='Status'></Select.Trigger>
        <Select.Content>
            {status.map((list)=>(<Select.Item key={list.label} value={list.Value || "ALL"}>{list.label}</Select.Item>))}
        </Select.Content>
    </Select.Root>
  )
}

export default IssueFilterByStatus