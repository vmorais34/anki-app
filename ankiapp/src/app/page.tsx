"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from '@headlessui/react'
import Link from 'next/link';

export default function Home() {

  const router = useRouter();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>('');

  const authentication = async (e: any) => {
    e.preventDefault();
    setError(null);

    if (login != "" && password != "") {

      const formData = {
        login: login,
        password: password
      }

      const add = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)

      })

      const content = await add.json();
      if (content.token) {
        sessionStorage.setItem("token", content.token);
        router.push('/home');
      } else {
        setError(content.error);
      }

    }
  }

  return (
    <div className='w-full py-4 px-4 dark:bg-gray-900'>
      <form className='w-full bg-slate-50 dark:bg-stone-800 rounded container max-w-[425px] mx-auto p-4 shadow-lg dark:shadow-yellow-50' onSubmit={authentication}>
        <h2 className='font-bold py-2 block text-2xl text-gray-900  dark:text-white  text-center w-full'>Login</h2>
        <div className='w-full py-2'>
          <label htmlFor="" className='text-sm font-bold py-2 block dark:text-white'>Usuário</label>
          <Input type='text' name='name' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setLogin(e.target.value)} />
        </div>
        <div className='w-full py-2'>
          <label htmlFor="" className='text-sm font-bold py-2 block dark:text-white'>Senha</label>
          <Input name='login' type="password" className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setPassword(e.target.value)} />
        </div>
        <div className='w-full py-2'>
          <Link className="text-black dark:text-white text-sm pt-2 hover:underline" href="/signup">	
            Cadastre-se
          </Link>
        </div>
        <div className='w-full py-2 pt-2'>
          <button className="py-2 px-4 w-full text-white border-green-200 border-[1px] rounded-sm bg-green-400">
            Login
          </button>
        </div>
        <div>
          {error && <div className="p-2 text-white border-gray-200 border-[1px] rounded-sm bg-red-400" style={{ color: 'red' }}>{error}</div>}
        </div>
      </form>

    </div>
  )
}
