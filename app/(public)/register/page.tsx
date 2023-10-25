/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable semi */

import React from 'react';
import Link from 'next/link';
import ButtonsReg from './components/buttons';

export default function Home() {
  return (
        <>
            <div className='w-full md:p-8 md:flex md:flex-col md:items-center md:justify-center'>
                <div className='w-full h-[717px] px-8 py-7 md:w-[324px] md:p-0'>
                    <h1 className='text-4xl font-bold'>Se inscreva e comece a curtir</h1>
                    <div className=''>
                        <form action="" className='py-10'>
                            <div className='pb-2'>
                                <label className='font-bold text-sm'>Endereço de e-mail</label>
                            </div>
                            <input className='w-full py-[10px] px-[14px] rounded-sm border bg-spotify-gray' placeholder='E-mail ou nome de usuário'></input>
                            <div className='pt-2  pb-4'>
                                <Link href={'/'} className='underline underline-offset-1 text-sm text-spotify-green'>Usar número de telefone.</Link>
                            </div>
                            <button className='bg-spotify-green text-black w-full py-2 px-8 rounded-full'>
                                <h2 className='mx-[28px] my-[5px] text-sm font-bold'>Avançar</h2>
                            </button>
                        </form>
                    </div>
                    <div className='w-full'>
                        <div className='flex flex-row items-center'>
                            <hr className='w-3/6'></hr>
                            <span className='px-3'>ou</span>
                            <hr className='w-3/6'></hr>
                        </div>
                    </div>
                    <div className='my-8'>
                        <ButtonsReg/>
                    </div>
                    <hr className='border-zinc-500'></hr>
                    <span className='w-full flex justify-center my-10 text-zinc-500'>
                        <p>Já tem uma conta?</p>
                        <Link href={'/login'} className='text-white underline underline-offset-1 ml-2'>Faça login aqui</Link>
                    </span>
                </div>
            </div>
        </>
  )
}
