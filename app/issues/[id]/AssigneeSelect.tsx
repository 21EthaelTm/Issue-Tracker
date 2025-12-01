"use client";
import { Issue, User } from "@/app/generated/prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {Skeleton} from "@/app/components"
import React, { useEffect, useState } from "react";

const AssignSelect = ({issue}:{issue:Issue}) => {
	const { error, data,isLoading} = useQuery<User[]>({
		queryKey: ['users'],
    queryFn: () => axios.get<User[]>('/api/user').then((res)=>res.data),
      staleTime:60*1000	,
	  retry:3
});
if(isLoading){
	return <Skeleton height="2rem"></Skeleton>
}
if(error) return null;

  return (
    <Select.Root  onValueChange={(userId)=>{
		axios.patch('/api/issues/' + issue.id,{assignedToUserId:userId || null})
	}}>
      <Select.Trigger placeholder="Assignee.." />
      <Select.Content>
        <Select.Group>
          <Select.Label>assignee</Select.Label>
		  <Select.Item value="unassigned">unassigned</Select.Item>
          {data?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssignSelect;
