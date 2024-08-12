"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import { TemplateContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import TemplateList from './_components/TemplateList'

const Dashboard = () => {
  const [userSearchInput,setUserSearchInput] = useState<string>();
  return (
    <div>
      
      {/* search section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      {/* template list */}
      <TemplateList userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard