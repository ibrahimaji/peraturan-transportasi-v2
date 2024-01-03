import { Loader2 } from 'lucide-react';
import React, { Suspense } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { UserProfile } from './user-profile';

export const Icons = {
  Spinner: Loader2,
};

export const Navbar = () => {
  return (
    <div className="px-[10px] md:px-0 py-2 border-b md:w-full z-10 top-0">
      <div className="md:container flex items-center justify-between mx-auto">
        <Image src="/kemenhub.png" width={50} height={50} alt="logo kemenhub" />
        <div className="flex items-center md:gap-[28px]">
          <Button variant="link" className="text-[#828282] font-poppins md:block hidden">Dashboard</Button>
          <Button variant="link" className="text-[#828282] font-poppins hidden md:block">Tentang</Button>
          <Suspense fallback={<Icons.Spinner className="h-4 w-4 animate-spin" />}>
            <UserProfile />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
