/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="w-full h-[72px] mb-[10px] flex flex-col pt-12 px-8 ">
        <Image
      src="/Spotify_Logo.png"
      width={80}
      height={24}
      alt="Logo Spotfy"
    />
    </div>
  );
}
