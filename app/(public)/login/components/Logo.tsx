/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <header className="w-full h-[72px] mb-[10px] flex flex-col pt-12 px-8 md:py-8 md:mb-0 md:px-[51px] md:h-[100px]">
        <Image
        className='md:w-[117px] md:h-9'
      src="/Spotify_Logo.png"
      width={80}
      height={24}
      alt="Logo Spotfy"
    />
    </header>
  );
}
