/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default function FormLogin() {
  return (
        <form className='md:w-[324px]'>
            <div className='pb-4'>
                <div className='pb-2'>
                    <label className='font-bold text-sm'>E-mail ou nome de usuário</label>
                </div>
                <input className='w-full py-[10px] px-[14px] rounded-sm border bg-spotify-gray' placeholder='E-mail ou nome de usuário'></input>
            </div>
            <div className='pb-4'>
                <div className='pb-2'>
                    <label className='font-bold text-sm'>Senha</label>
                </div>
                <input className='w-full py-[10px] px-[14px] rounded-sm border bg-spotify-gray' placeholder='Senha'></input>
            </div>
            <div className='flex'>
                <div className="inline-flex items-center ">
                    <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full bg-white">
                        <input
                            id="switch-5"
                            type="checkbox"
                            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-spotify-green peer-checked:border-spotify-green peer-checked:before:bg-spotify-green"
                        />
                        <label
                            htmlFor="switch-5"
                            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-teal-500 peer-checked:before:bg-teal-500"
                        >
                            <div
                                className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                                data-ripple-dark="true"
                            ></div>
                        </label>
                    </div>
                </div>
                <p className='ml-3'>Lembrar de mim</p>
            </div>
            <div className='py-8'>
            <button className='bg-spotify-green text-black w-full py-2 px-8 rounded-full'>
                <h2 className='mx-[28px] my-[5px] text-sm font-bold'>Entrar</h2>
            </button>
            </div>
        </form>
  );
}
