import { Card, Flex,Text } from '@radix-ui/themes'
import React from 'react'
import { Status } from './generated/prisma/enums';
import Link from 'next/link';
 interface Props{
    open:number;
    inProgress:number;
    closed:number
 }
const IssueSummary = ({open,inProgress,closed}:Props) => {
  const Container:{label:string,value:number,status:Status}[] = [
    {label:'open Issues',value:open,status:'open'},
    {label:'inProgress Issues',value:inProgress,status:'In_progress'},
    {label:'closed Issues',value:closed,status:'closed'}
  ]
    return (
    <Flex gap="4">
        {Container.map((list)=>(
            <Card key={list.label} >
                <Flex direction="column" justify="center" align="center" gap="1">
                <Link className='text-sm font-medium' href={"/issues/list?status="+list.status }>{list.label}</Link>
                <Text size="5" className="font-bold"> {list.value}</Text>
                </Flex>
            </Card>
        ))}
    </Flex>
  )
}

export default IssueSummary;