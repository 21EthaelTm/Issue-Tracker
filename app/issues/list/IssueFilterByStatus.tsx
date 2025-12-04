'use client'
import { Status } from '@/app/generated/prisma/enums'
import { Select} from '@radix-ui/themes'
import { useRouter, useSearchParams } from 'next/navigation'

const statusOptions: {label: string, value?: Status}[] = [
    {label: 'All'}, // This will have no value
    {label: 'Open', value: 'open'},
    {label: 'Closed', value: 'closed'},
    {label: 'On Progress', value: 'In_progress'} // Fixed label to match enum
]

const IssueFilterByStatus = () => {
   const router = useRouter();
   const searchParams = useSearchParams();
  return (
    <Select.Root  size="3"  defaultValue={searchParams.get('status') || ''} onValueChange={(status)=>{
     const params = new URLSearchParams();
        if (status) params.append('status', status);
        if (searchParams.get('orderBy'))
          params.append('orderBy', searchParams.get('orderBy')!);

        const query = params.size ? '?' + params.toString() : '';
        router.push('/issues/list' + query);
        router.refresh();
    }}>
        <Select.Trigger  placeholder='Status'></Select.Trigger>
        <Select.Content>
            {statusOptions.map((list)=>(<Select.Item key={list.label} value={list.value || "All"}>{list.label}</Select.Item>))}
        </Select.Content>
    </Select.Root>
  )
}

export default IssueFilterByStatus