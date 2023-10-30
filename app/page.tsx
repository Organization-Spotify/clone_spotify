/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable semi */

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
     <div className='w-full h-full flex flex-col items-center justify-center'>
      <Link href={'/login'}>Pagina de Login</Link>
      <Link href={'/register'}>Pagina de Registro</Link>
     </div>
    </>
  )
}
