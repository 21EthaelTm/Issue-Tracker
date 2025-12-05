import { Status } from '@/app/generated/prisma/enums'
import { Select } from '@radix-ui/themes'
import React from 'react'
import { Label } from 'recharts';
interface props{
    label:string;
    value:Status
}

const StatuArry:props[]  = [{label:"Open",value:"open"},
    {label:"In progress",value:"In_progress"},
    {label:"closed",value:"closed"}
]
const AdminStatusBadge = ({label,value}:props) => {
  return (
    <Select.Root>
    <Select.Trigger  />
          <Select.Content>
            <Select.Group>
              <Select.Label>Status</Select.Label>
              <Select.Item value="unassigned">unassigned</Select.Item>
              {StatuArry?.map((user) => (
                <Select.Item key={user.value}  value={user.value}>
                  {user.label}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
  )
}

export default AdminStatusBadge