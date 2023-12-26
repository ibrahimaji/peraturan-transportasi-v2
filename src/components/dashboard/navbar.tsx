import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { DialogButton } from './dialogButton';

export const Navbar = () => {
  return (
    <div className="py-2 border-b w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Image src="/kemenhub.png" width={50} height={50} alt="logo kemenhub" />
        <div className="flex items-center gap-[28px]">
          <Button variant="link" className="text-[#828282] font-poppins">Dashboard</Button>
          <Button variant="link" className="text-[#828282] font-poppins">Tentang</Button>
          <DialogButton />
          <Button variant="link" className="bg-[#3498db] font-poppins text-[#FFF] ">Masuk</Button>
        </div>
      </div>
    </div>
  );
};
