import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}
export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}

function TemplateList({userSearchInput}:any) {

    const [templatesList, setTemplatesList] =useState(Templates)

    useEffect(()=>{
       if(userSearchInput){
        const filterData = Templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
        setTemplatesList(filterData);
       }
       else{
        setTemplatesList(Templates);
       }
    },[userSearchInput])
  return (
    <div className='grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-5 p-10'>
        {templatesList.map((item:TEMPLATE,index:number)=>(
           <TemplateCard key={index}{...item}/>
        ))}
    </div>
  )
}

export default TemplateList