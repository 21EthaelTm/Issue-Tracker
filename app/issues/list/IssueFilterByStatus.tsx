'use client'
import { Status } from '@/app/generated/prisma/enums'
import { Select} from '@radix-ui/themes'
import { useRouter } from 'next/navigation'

const statusOptions: {label: string, value?: Status}[] = [
    {label: 'All'}, // This will have no value
    {label: 'Open', value: 'open'},
    {label: 'Closed', value: 'closed'},
    {label: 'On Progress', value: 'In_progress'} // Fixed label to match enum
]

const IssueFilterByStatus = () => {
   const router = useRouter();
   
  return (
    <Select.Root  size="3" onValueChange={(status)=>{
       let query =""
       if(status && status !=='All')
        query = '?status=' + status
        router.push(`/issues/list${query}`);
    }}>
        <Select.Trigger  placeholder='Status'></Select.Trigger>
        <Select.Content>
            {statusOptions.map((list)=>(<Select.Item key={list.label} value={list.value || "All"}>{list.label}</Select.Item>))}
        </Select.Content>
    </Select.Root>
  )
}

export default IssueFilterByStatus