"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateList'
import Templates from '@/app/(data)/Templates'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/Aimodel'

interface PROPS{
 params:{
    'template-slug':string
 }
}

function CreateNewContent(props:PROPS) {
   const selectedTemplate:TEMPLATE | undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
   const [loading,setLoading] = useState(false);
   const [aiOutput, setAIOutput] = useState<string>('');

   const GenerateAiContent= async(formData:any)=>{
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData)+","+SelectedPrompt;
    const result  = await chatSession.sendMessage(FinalAIPrompt);

    console.log(result.response.text());
    setAIOutput(result.response.text());
    setLoading(false);
   }

  return (
   <>
    <div className='p-5'>
      <Link href={'/dashboard'}>
       <Button>   <ArrowLeft/>Back </Button>
      </Link>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        {/*form section */}
        <FormSection selectedTemplate={selectedTemplate}
        userFormInput={(v:any)=>GenerateAiContent(v)}
        loading={loading}
        />
          {/*output section */}
        <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput}/>
        </div>
    </div>
    </>
  )
}

export default CreateNewContent