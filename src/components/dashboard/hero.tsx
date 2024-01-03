/* eslint-disable */
import React from 'react';

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:mt-[50px] md:mx-[135px] mx-[20px] md:mb-[100px] ">
      <div className="font-poppins text-[#1B2021] text-xl md:text-6xl font-medium tracking-wide">
        Peraturan Transportasi
      </div>
      <div className="flex">
        <div className="w-[38px] h-[3px] bg-[#3498db] mt-[10px] mr-[10px] hidden md:block" />
        <div className="md:w-[575px] font-poppins text-[#828282] text-sm md:text-xl tracking-{0.2px} leading-8">
          Kumpulan peraturan transportasi mulai dari Undang-Undang, Peraturan Pemerintah, Peraturan Presiden dan Peraturan Menteri.
        </div>
      </div>
    </div>
  );
};
