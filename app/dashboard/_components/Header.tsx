import React from 'react'
import { Search } from 'lucide-react'
function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
      <div className='flex  gap-2 items-center p-2 border rounded-md max-w-lg'>
        <Search/>
        <input className='outline-none' type="text" placeholder='Search...' />
      </div>
      <div>
        <h2 className='bg-primary text-white text-xs rounded-full p-1 px-2'>Join Membership just for $9.99/ month</h2>
      </div>
    </div>
  )
}

export default Header