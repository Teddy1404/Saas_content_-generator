import React from 'react'
import { Search } from 'lucide-react'
function SearchSection() {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-700 justify-center items-center flex flex-col text-white'>
        <h2 className='text-3xl font-bold'>Browse all templates</h2>
        <p>What would you like to add today?</p>
        <div className='w-full flex justify-center' >
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
                <Search  className='text-primary' />
                <input type='text' placeholder='Search' className='bg-transparent w-full outline-none text-black'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection