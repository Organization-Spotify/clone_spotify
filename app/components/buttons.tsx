/* eslint-disable linebreak-style */
import React from 'react';
import Image from 'next/image';

export default function Buttons() {
  return (
        <>
          <button className='w-full h-[48px] flex px-[31px] py-[7px] border border-gray-500 rounded-full items-center mb-2'>
            <Image
            src={'/Logo_Google.png'}
            width={24}
            height={24}
            alt='Google'
            />
            <h2 className='mx-[24px] my-[5px] text-sm font-bold'>Continuar com o Google</h2>
            </button>
            <button className='w-full h-[48px] flex px-[31px] py-[7px] border border-gray-500 rounded-full items-center mb-2'>
            <Image
            src={'/Logo_Facebook.png'}
            width={30}
            height={30}
            alt='Google'
            />
            <h2 className='mx-[24px] my-[5px] text-sm font-bold'>Continuar com o Facebook</h2>
            </button>
            <button className='w-full h-[48px] flex px-[31px] py-[7px] border border-gray-500 rounded-full items-center mb-2'>
            <Image
            src={'/Logo_apple.png'}
            width={24}
            height={24}
            alt='Google'
            />
            <h2 className='mx-[28px] my-[5px] text-sm font-bold'>Continuar com a Apple</h2>
            </button>
            <button className='w-full h-[48px] flex px-[31px] py-[7px] border border-gray-500 rounded-full items-center mb-2'>

            <h2 className='mx-[28px] my-[5px] text-sm font-bold'>Continuar com um número de telefone</h2>
            </button>
      </>
  );
}
