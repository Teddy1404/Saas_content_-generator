import React from 'react'
import SearchSection from './_components/SearchSection'
import { TemplateContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import TemplateList from './_components/TemplateList'

const Dashboard = () => {
  return (
    <div>
      
      {/* search section */}
      <SearchSection/>
      {/* template list */}
      <TemplateList/>
    </div>
  )
}

export default Dashboard