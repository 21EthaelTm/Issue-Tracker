'use client'
import React from 'react'
import { TextField ,TextArea, Button} from '@radix-ui/themes';
import dynamic from 'next/dynamic';
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false // ← This is the key difference
});
const newIssuPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
    <TextField.Root placeholder="Title" >
    </TextField.Root>
    <SimpleMDE />;
    <Button>Submit New Issue</Button>
    
    </div>
  )
}

export default newIssuPage