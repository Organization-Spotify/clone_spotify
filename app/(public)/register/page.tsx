/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable semi */

'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import ButtonsReg from './components/buttons';
import Checkbox from './components/checkbox';

export default function Home() {
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ];

  const [type, setType] = useState<string>('etapa1');
  let content: any;

  if (type === 'etapa1') {
    content = (
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
                            <button onClick={() => setType('etapa2')} className='bg-spotify-green text-black w-full py-2 px-8 rounded-full'>
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
                        <ButtonsReg />
                    </div>
                    <hr className='border-zinc-500'></hr>
                    <span className='w-full flex justify-center my-10 text-zinc-500'>
                        <p>Já tem uma conta?</p>
                        <Link href={'/login'} className='text-white underline underline-offset-1 ml-2'>Faça login aqui</Link>
                    </span>
                </div>
            </div>
    )
  } else if (type === 'etapa2') {
    content = (
            <main className='flex flex-col w-full px-8 md:items-center md:h-[80vh]'>
                <form className='flex flex-col w-full md:w-[436px] md:items-center'>
                    <div className="flex-start flex h-0.5 w-full overflow-hidden rounded-sm bg-zinc-500 font-sans text-xs font-medium mt-8">
                        <div
                            className="flex w-1/3 h-full items-baseline justify-center overflow-hidden break-all bg-spotify-green text-white animate-progress"
                        ></div>
                    </div>
                    <div className='flex w-full mb-4'>
                            <button onClick={() => setType('etapa1')} className=' pr-4'>
                                <IoIosArrowBack className='w-6 h-6 text-zinc-500' />
                            </button>
                            <div className='flex flex-col py-4 mr-14'>
                                <span className='text-zinc-400'>Etapa 1 de 3</span>
                                <span className='font-semibold'>Crie uma senha</span>
                            </div>
                        </div>
                    <div className='flex flex-col md:w-[324px]'>
                        <div className='pb-4'>
                            <div className='pb-2'>
                                <label className='font-bold text-sm'>Senha</label>
                            </div>
                            <input type='password' className='w-full py-[10px] px-[14px] rounded-sm border bg-spotify-gray' placeholder='Senha'></input>
                        </div>
                        <span className='text-zinc-400 text-sm mb-[40vh] md:mb-8 '>
                            A senha deve ter pelo menos 8 caracteres.
                            Recomendamos incluir pelo menos 1 número e 1 caractere especial.
                        </span>

                        <button onClick={() => setType('etapa3')} className='bg-spotify-green text-black w-full py-2 px-8 rounded-full'>
                            <h2 className='mx-[28px] my-[5px] text-sm font-bold'>Avançar</h2>
                        </button>
                    </div>
                </form>
            </main>)
  } else if (type === 'etapa3') {
    content = (
        <main className='px-8 flex justify-center md:h-[770px]'>
            <section className='flex flex-col w-full md:w-[436px] md:items-center '>
                    <div className="flex-start flex h-0.5 w-full overflow-hidden rounded-sm bg-zinc-500 font-sans text-xs font-medium mt-8">
                        <div
                            className="flex w-1/3 h-full items-baseline justify-center overflow-hidden break-all bg-spotify-green text-white"
                        ></div>
                        <div
                            className="flex w-1/3 h-full items-baseline justify-center overflow-hidden break-all bg-spotify-green text-white animate-progress"
                        ></div>
                    </div>
                    <div className='flex w-full mb-4'>
                            <button onClick={() => setType('etapa2')} className=' pr-4'>
                                <IoIosArrowBack className='w-6 h-6 text-zinc-500' />
                            </button>
                            <div className='flex flex-col py-4 mr-14'>
                                <span className='text-zinc-400'>Etapa 2 de 3</span>
                                <span className='font-semibold'>Fale de você</span>
                            </div>
                        </div>
                    <div className='flex flex-col w-full md:w-[324px] md:items-center'>
                        <div className='flex flex-col text-sm mb-5 w-full'>
                            <label htmlFor="" className='font-semibold'>Nome</label>
                            <span className='text-zinc-400 mb-2'>Este nome aparecerá no seu perfil</span>
                            <input type='text' className='w-full py-[10px] px-[14px] rounded-sm border bg-spotify-gray'></input>
                        </div>
                        <div className='flex flex-col text-sm mb-4'>
                            <label htmlFor="" className='font-semibold'>Data de nascimento</label>
                            <span className='text-zinc-400 mb-2'>Por que precisamos da sua data de nascimento? <a href='' className='underline'>Saiba mais.</a></span>
                            <div className='flex h-12 gap-x-2'>
                                <input className='w-2/12 p-2 rounded-sm' placeholder='dd'></input>
                                <select id="selectMes" className='w-6/12 p-2 rounded-sm display:none'>
                                    <option value="" disabled>Mês</option>
                                    {meses.map((mes, index) => (
                                    <option key={index} value={mes}>
                                        {mes}
                                    </option>
                                    ))}
                                </select>
                                <input className='w-4/12 p-2 rounded-sm' placeholder='aaaa' type='number'></input>
                            </div>
                        </div>
                        <div className='flex flex-col mb-24'>
                            <label htmlFor="">Gênero</label>
                            <span className='text-zinc-400 mb-2 text-sm'>Usamos seu gênero para ajudar a personalizar nossas recomendações de conteúdo e anúncios para você.</span>
                            <section className='grid grid-cols-3 text-sm font-semibold gap-y-2 md:grid-cols-2'>
                                <div className=''>
                                    <label className='flex items-center space-x-2 cursor-pointer'>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="Homem"
                                            className='before:content[""] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-spotify-green transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-4 checked:border-spotify-green hover:before:opacity-10'
                                        />
                                        <span className='ml-3'>Homem</span>
                                    </label>
                                </div>
                                <div>
                                    <label className='flex'>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="Mulher"
                                            className='before:content[""] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-spotify-green transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-4 checked:border-spotify-green hover:before:opacity-10'
                                        />
                                        <span className='ml-3'>Mulher</span>
                                    </label>
                                </div>
                                <div>
                                    <label className='flex'>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="Não binário"
                                            className='before:content[""] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-spotify-green transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-4 checked:border-spotify-green hover:before:opacity-10'
                                        />
                                        <span className='ml-3'>Não binário</span>
                                    </label>
                                </div>
                                <div>
                                    <label className='flex'>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="Outro"
                                            className='before:content[""] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-spotify-green transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-4 checked:border-spotify-green hover:before:opacity-10'
                                        />
                                        <span className='ml-3'>Outro</span>
                                    </label>
                                </div>
                                <div>
                                    <label className='flex'>
                                        <input
                                            type="radio"
                                            name="options"
                                            value="Prefiro não dizer"
                                            className='before:content[""] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-spotify-green transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-4 checked:border-spotify-green hover:before:opacity-10'
                                        />
                                        <span className='ml-3'>Prefiro não dizer</span>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <button onClick={() => setType('etapa4')} className='bg-spotify-green text-black w-full py-2 px-8 rounded-full'>
                                <h2 className='mx-[28px] my-[5px] text-sm font-bold'>Avançar</h2>
                        </button>
                    </div>
                </section>
        </main>
    )
  } else if (type === 'etapa4') {
    content = (
        <main className='px-8 flex justify-center md:h-[770px]'>
            <form className='flex flex-col w-full md:w-[436px] md:items-center '>
                    <div className="flex-start flex h-0.5 w-full overflow-hidden rounded-sm bg-zinc-500 font-sans text-xs font-medium mt-8">
                        <div
                            className="flex w-1/3 h-full items-baseline justify-center overflow-hidden break-all bg-spotify-green text-white"
                        ></div>
                        <div
                            className="flex w-1/3 h-full items-baseline justify-center overflow-hidden break-all bg-spotify-green text-white"
                        ></div>
                        <div
                            className="flex w-1/3 h-full items-baseline justify-center overflow-hidden break-all bg-spotify-green text-white animate-progress"
                        ></div>
                    </div>
                    <div className='flex w-full mb-4'>
                            <button onClick={() => setType('etapa3')} className=' pr-4'>
                                <IoIosArrowBack className='w-6 h-6 text-zinc-500' />
                            </button>
                            <div className='flex flex-col py-4 mr-14'>
                                <span className='text-zinc-400'>Etapa 3 de 3</span>
                                <span className='font-semibold'>Termos e condições</span>
                            </div>
                    </div>
                    <section className='w-full flex flex-col mt-4 gap-y-2 text-xs font-medium mb-44 md:w-[324px] md:items-center'>
                        <div className='flex flex-row py-4 pl-4 bg-spotify-gray rounded-md'>
                            <div>
                                <Checkbox/>
                            </div>
                            <span className='pr-6 flex items-center'>Não quero receber mensagens de marketing do Spotify</span>
                        </div>
                        <div className='flex flex-row py-4 pl-4 bg-spotify-gray rounded-md'>
                            <div>
                                <Checkbox/>
                            </div>
                            <span className='pr-6 flex items-center'>Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing.</span>
                        </div>
                        <div className='flex flex-row py-4 pl-4 bg-spotify-gray rounded-md'>
                            <div>
                                <Checkbox/>
                            </div>
                            <span className='pr-6 flex items-center'><div>Eu concordo com os <a href='#' className='text-spotify-green underline'> Termos e Condições de Uso do Spotify</a>.</div></span>
                        </div>
                        <span className=''>
                            Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados pessoais, leia a <a href='#' className='text-spotify-green underline'> Política de Privacidade do Spotify</a>.
                        </span>
                    </section>
                    <Link href={'/'} className='flex flex-col w-full md:w-[324px] md:items-center'>
                            <button className='bg-spotify-green text-black w-full py-2 px-8 rounded-full'>
                                    <h2 className='mx-[28px] my-[5px] text-sm font-bold'>Inscrever-se</h2>
                            </button>
                    </Link>
            </form>
        </main>
    )
  }
  return (
        <>
            {content}
        </>
  )
}
