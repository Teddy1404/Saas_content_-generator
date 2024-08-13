import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
function OutputSection() {
  const editorRef:any = useRef();
  return (
    <div className='bg-white shadow-lg border'>
      
    <div className='flex justify-between items-center p-5'>
      <h2>Your result</h2>
      <Button><Copy/>copy</Button>
    </div>
    <Editor
    ref={editorRef}
    initialValue="hello react editor world!"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default OutputSection