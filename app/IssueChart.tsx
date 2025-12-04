'use client'
import { Card } from '@radix-ui/themes';
import { Bar, BarChart, Label, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import React from 'react'
import { prisma } from '@/prisma/client';
 interface Props{
    open:number;
    inProgress:number;
    closed:number
 }
 

const IssueChart = ({open,inProgress,closed}:Props) => {
    const data = [
     {label:'open Issues',value:open},
     {label:'inProgress Issues',value:inProgress},
     {label:'closed Issues',value:closed}
   ]
    
  return (
    <Card>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
        <XAxis dataKey='label'/>
        <YAxis/>
        <Bar dataKey="value" barSize="60" style={{fill: 'var(--accent-9)'}}/>
    </BarChart>
  </ResponsiveContainer>
    </Card>
  )
}

export default IssueChart