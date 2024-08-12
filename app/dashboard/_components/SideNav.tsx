import React from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
function SideNav() {

  const MenuList =[
    {
      name:'Home',
      icon: Home,
      path:'/dashboard'
    },
    {
      name:'History',
      icon: FileClock,
      path:'/dashboard/history'
    },
    {
      name:'Billing',
      icon: WalletCards,
      path:'/dashboard/billing'
    },
    {
      name:'Setting',
      icon: Settings,
      path:'/dashboard/setting'
    }

  ]

  return (
  <div className='h-screen p-5 shadow-sm border'>
  <div className='flex justify-center '>
  <Image src={'/logo.svg'} alt='logo' width={120} height={100}/>
  </div>
  <hr className='my-6 h-3'/>
  <div className='mt-10'>
  {MenuList.map((menu, index) => (
  <div className='flex gap-3 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center' key={index}>
   <menu.icon className='h-6 w-6'/>
    <h2 className='text-lg'>{menu.name}</h2>
  </div>
))}

  </div>
  </div>
  )
}

export default SideNav