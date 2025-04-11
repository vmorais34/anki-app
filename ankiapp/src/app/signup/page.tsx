"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from '@headlessui/react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function Signup() {

  const router = useRouter();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const register = async (e: any) => {
    e.preventDefault();
    setError(null);

    if (login != "" && password != "" && name != "" && email != "") {

      const formData = {
        name: name,
        login: login,
        password: password,
        email: email
      }

      const add = await fetch('http://localhost:3001/postUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)

      })

      const content = await add.json();
      setIsOpen(true)
      if (content.token) {
        sessionStorage.setItem("token", content.token);
        router.push('/login');
      } else {
        setError(content.error);
      }

    }
  }

  return (
    <div className='w-full py-4 px-4 dark:bg-gray-900 min-h-[700px] flex items-center justify-center'>
        {isOpen ? 
         <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded">
                <DialogTitle className="font-bold">Registered with success!</DialogTitle>
            </DialogPanel>
            </div>
        </Dialog> 
        :
        <form className='h-max w-full bg-slate-50 dark:bg-stone-800 rounded container max-w-[425px] mx-auto p-4 shadow-lg dark:shadow-yellow-50' onSubmit={register}>
            <h2 className='font-bold py-2 block text-2xl text-gray-900  dark:text-white  text-center w-full'>Cadastre-se</h2>
            <div className='w-full py-2'>
            <label htmlFor="" className='text-sm font-bold py-2 block dark:text-white'>Email</label>
            <Input type='email' name='email' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setEmail(e.target.value)} />
            </div>
            <div className='w-full py-2'>
            <label htmlFor="" className='text-sm font-bold py-2 block dark:text-white'>Usuário</label>
            <Input type='text' name='user' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setLogin(e.target.value)} />
            </div>
            <div className='w-full py-2'>
            <label htmlFor="" className='text-sm font-bold py-2 block dark:text-white'>Nome</label>
            <Input type='text' name='name' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setName(e.target.value)} />
            </div>
            <div className='w-full py-2'>
            <label htmlFor="" className='text-sm font-bold py-2 block dark:text-white'>Senha</label>
            <Input name='login' type="password" className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setPassword(e.target.value)} />
            </div>
            
            <div className='w-full py-2 pt-2'>
            <button className="py-2 px-4 w-full text-white border-green-200 border-[1px] rounded-sm bg-green-400">
                Cadastrar
            </button>
            </div>
            <div>
            {error && <div className="p-2 text-white border-gray-200 border-[1px] rounded-sm bg-red-400" style={{ color: 'red' }}>{error}</div>}
            </div>
        </form>
        }
    </div>
  )
}
