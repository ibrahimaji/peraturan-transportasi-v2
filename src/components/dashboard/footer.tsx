/* eslint-disable */
import Link from 'next/link';
import React from 'react';
import { InstagramIcon, TwitterIcon } from 'lucide-react';
import { Button } from '../ui/button';

export const Footer = () => {
  return (
    <div className="py-2 border-b md:w-full z-10 bottom-0 mt-10">
      <div className="container flex md:flex-row flex-col items-center justify-between">
        <div className="text-sm text-[#828282] font-poppins hidden md:block">
          Created by @ibrahimcious. Design inspired by&nbsp; <Link href="https://codedesign.dev/challenge/omah">Dzaki Muzhaffar</Link>
          <div className="md:hidden">
            <Link href="http://www.instagram.com/ibrahimcious" target="_blank">
              <Button variant="link"><InstagramIcon /></Button>
            </Link>
            <Link href="http://www.x.com/ibrahimcious" target="_blank">
              <Button variant="link"><TwitterIcon /></Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <Link href="http://www.instagram.com/ibrahimcious" target="_blank">
            <Button variant="link"><InstagramIcon /></Button>
          </Link>
          <Link href="http://www.x.com/ibrahimcious" target="_blank">
            <Button variant="link"><TwitterIcon /></Button>
          </Link>
        </div>

      </div>
    </div>
  );
};
