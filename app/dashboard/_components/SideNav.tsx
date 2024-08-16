'use client';

import React from 'react';
import Image from 'next/image';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import UsageTrack from './UsageTrack';

function SideNav() {
  const router = useRouter(); // useRouter for navigation
  const path = usePathname(); // Get current path

  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing',
    },
    {
      name: 'Setting',
      icon: Settings,
      path: '/dashboard/setting',
    },
  ];

  const handleNavigation = (menuPath: string) => {
    router.push(menuPath); // Navigate to the selected path
  };

  return (
    <div className="h-screen p-5 shadow-sm border bg-white relative">
      <div className="flex justify-center ">
        <Image src={'/logo.svg'} alt="logo" width={120} height={100} />
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-3 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
              ${path === menu.path && 'bg-primary text-white'}`}
            onClick={() => handleNavigation(menu.path)} // Navigate on click
          >
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
