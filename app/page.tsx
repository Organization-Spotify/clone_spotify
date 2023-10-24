/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable semi */

import React from 'react';
import Link from 'next/link';
import Logo from './components/Logo';
import Buttons from './components/buttons';
import FormLogin from './components/formLogin';

export default function Home() {
  return (
    <>
      <Logo />
      <div className='w-full h-[860px] overflow-y-auto p-8'>
        <h1 className='mb-8 font-extrabold text-3xl'>Entrar no Spotify</h1>
        <Buttons />
        <hr className='my-8 '></hr>
        <FormLogin/>
        <div className='flex items-center justify-center'>
          <Link href={'/'} className='underline underline-offset-2 text-sm'>Esqueceu sua senha?</Link>
        </div>
      </div>
    </>
  )
}
