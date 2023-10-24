/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable semi */

import React from 'react';
import Link from 'next/link';
import Logo from './components/Logo';
import Buttons from './components/buttons';
import FormLogin from './components/formLogin';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Logo />
      <div className='w-full md:bg-black md:bg-gradient-to-b from-white/10 to-black md:p-8 md:flex md:flex-col md:items-center'>
      <div className='flex flex-col w-full overflow-y-auto p-8 md:bg-black md:w-[734px] md:h-full md:rounded-md md:items-center'>
        <h1 className='mb-8 font-extrabold text-3xl md:text-5xl md:py-12'>Entrar no Spotify</h1>
        <Buttons />
        <hr className='my-8 md:w-[534px] border-zinc-700'></hr>
        <FormLogin/>
        <div className='flex items-center justify-center'>
          <Link href={'/'} className='underline underline-offset-2 text-sm'>Esqueceu sua senha?</Link>
        </div>
        <hr className='hidden md:inline-flex my-8 md:w-[534px] border-zinc-700'></hr>
        <div className='flex flex-col justify-center items-center w-full py-4 md:flex-row'>
          <Link href={'/'} className='text-zinc-400' >Não tem uma conta?</Link>
          <Link href={'/'} className='mt-[5px] underline underline-offset-2 text-sm md:ml-2'>Inscreva-se no Spotify</Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
