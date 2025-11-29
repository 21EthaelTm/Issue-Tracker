"use client";
import Spinner from "@/app/components/Spinner";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
const DeleteIssueButton =  ({ IssueId }: { IssueId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
    const [isDeleting,setIsDeleting] = useState(false)
    
  return (
     
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Delete Issue</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to Delete this Isseu? once deteled it cant be
            undone!
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="center">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button disabled ={isDeleting}
                variant="solid"
                color="red"
                onClick={async () => {
                  try {
                    setIsDeleting(true)
                    await axios.delete(`/api/issues/${IssueId}`);
                    router.push("/issues/list");
                    router.refresh();
                  } catch (error) {
                    setIsDeleting(false)
                    setError(true);
                  }
                }}
              >
                Delete Issue {isDeleting && <Spinner/>}
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            Delete Operation cant be perfomed
          </AlertDialog.Description>

          <Button
            color="gray"
            variant="soft"
            mt="2"
            onClick={() => setError(false)}
          >
            ok
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
