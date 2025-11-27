"use client";
import React, { useState } from "react";
import { TextField, TextArea, Button, Callout, Text } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import {z} from 'zod';
import {zodResolver } from "@hookform/resolvers/zod";
import {createIssueSchema} from '../../validationSchema'

type Issuetype = z.infer<typeof createIssueSchema>
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false, // ← This is the key difference
});
const newIssuPage = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit, control,formState :{errors} } = useForm<Issuetype>({resolver:zodResolver(createIssueSchema)});
  const router = useRouter();
  return (
    <div className="max-w-xl ">
      {error && <Callout.Root color="red" className="mb-5">
         <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
      
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issue", data);
            router.push("/issues");
          } catch (error) {
            setError('unexpected error occured ')
          }
        })}
      >
        <TextField.Root
          placeholder="Title"
          {...register("title")}
        ></TextField.Root>
         {errors.title && <Text color="red">{errors.title.message}</Text>}
        <Controller
          name="description"
          control={control}
          // Simplified render prop passing all field props directly
          render={({ field }) => <SimpleMDE placeholder="description" {...field} />}
        />
        {errors.description && <Text color="red" as="p">{errors.description.message}</Text>}

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default newIssuPage;
