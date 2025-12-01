"use client";
import { User } from "@/app/generated/prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AssignSelect = () => {
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<User[]>("/api/user");
      setUser(data);
    };
    fetchData();
  }, []);
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger placeholder="Assignee.." />
      <Select.Content>
        <Select.Group>
          <Select.Label>assignee</Select.Label>
          {user.map((user) => (
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
