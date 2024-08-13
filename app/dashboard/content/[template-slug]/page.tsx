"use client"
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateList'
import Templates from '@/app/(data)/Templates'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PROPS{
 params:{
    'template-slug':string
 }
}

function CreateNewContent(props:PROPS) {
   const selectedTemplate:TEMPLATE | undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);

   const GenerateAiContent=(formData:any)=>{

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
        />
          {/*output section */}
        <div className='col-span-2'>
        <OutputSection/>
        </div>
    </div>
    </>
  )
}

export default CreateNewContent