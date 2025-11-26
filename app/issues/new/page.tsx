"use client";
import React, { useState } from "react";
import { TextField, TextArea, Button, Callout } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { error } from "console";

interface Issuetype {
  title: string;
  description: string;
}
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false, // ← This is the key difference
});
const newIssuPage = () => {
  const [error, serError] = useState("");
  const { register, handleSubmit, control } = useForm<Issuetype>();
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
            serError('unexpected error occured ')
          }
        })}
      >
        <TextField.Root
          placeholder="Title"
          {...register("title")}
        ></TextField.Root>
        <Controller
          name="description"
          control={control}
          // Simplified render prop passing all field props directly
          render={({ field }) => <SimpleMDE placeholder="description" {...field} />}
        />

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default newIssuPage;
