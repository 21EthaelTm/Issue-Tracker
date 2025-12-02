import React from 'react'
import { Status } from '../generated/prisma/enums'
import { Badge } from '@radix-ui/themes'

const statusBadge :Record<Status,{label:string,color:'red'|'green'|'violet'}> = {
    closed:{label:'closed',color:'green'},
    open : {label:'open',color:'red'},
    In_progress : {label: "In_progress",color:'violet'}
}
const IssueStatusBadge = ({status}:{status:Status}) => {
  return (
        <Badge color={statusBadge[status].color}>{statusBadge[status].label}</Badge>
  )
}

export default IssueStatusBadge