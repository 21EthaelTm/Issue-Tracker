"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import ErrorMessage from "../../components/ErrorMessage";
import Spinner from "../../components/Spinner";
import { IssueSchema } from "../../validationSchema";
import { Issue } from "@/app/generated/prisma/client";
import SimpleMDE from 'react-simplemde-editor'

type Issuetype = z.infer<typeof IssueSchema>;
const IssueForm = ({ issue }: { issue?: Issue }) => {
  const [error, setError] = useState("");
  const [isSubmitting, setIssubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Issuetype>({ resolver: zodResolver(IssueSchema) });
  const router = useRouter();
  const OnSubmit = handleSubmit(async (data) => {
    try {
      setIssubmitting(true);
      if(issue)
        await axios.patch("/api/issue"+ issue.id,data);
      else
      await axios.post("/api/issue", data);
      router.push("/issues");
    } catch (error) {
      setIssubmitting(false);
      setError("unexpected error occured ");
    }
  });

  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className=" space-y-3" onSubmit={OnSubmit}>
        <TextField.Root
          placeholder="Title"
          {...register("title")}
          defaultValue={issue?.title}
        ></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          // Simplified render prop passing all field props directly
          render={({ field }) => (
            <SimpleMDE placeholder="description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          {issue? "Update issue": "Submit New Issue"}{' '} {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
