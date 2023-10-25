/* eslint-disable linebreak-style */
import React from 'react';
import Image from 'next/image';

export default function ButtonsReg() {
  return (
    <div className='md:w-[324px]'>
      <button className='w-full h-[48px] flex px-[31px] py-[7px] border border-gray-500 rounded-full items-center mb-2'>
        <Image
          src={'/Logo_Google.png'}
          width={24}
          height={24}
          alt='Google'
        />
        <h2 className='w-full mx-[24px] my-[5px] text-sm font-bold items-center'>Continuar com o Google</h2>
      </button>
      <button className='w-full h-[48px] flex px-[31px] py-[7px] border border-gray-500 rounded-full items-center mb-2'>
        <Image
          src={'/Logo_Facebook.png'}
          width={30}
          height={30}
          alt='Google'
        />
        <h2 className='w-full mx-[24px] my-[5px] text-sm font-bold'>Continuar com o Facebook</h2>
      </button>
      </div>
  );
}
