import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

export const FormSection = () => {
  return (
    <div className="md:max-w-xl mx-[10px] md:mx-auto p-10 flex flex-col justify-center items-center bg-[#3498db] rounded-xl gap-5">
      <div className="flex items-center justify-center font-poppins">Ada peraturan yang belum masuk? Ada ide yang terbaru? Silakan berkontribusi dengan mengisi form ini</div>
      <Button><Link href="https://tally.so/r/wo24WX" target="_blank">Beri masukan</Link></Button>
    </div>
  );
};
