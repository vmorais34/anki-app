"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LanguageCreate() {

    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const addLanguage = async (e: any) => {
        e.preventDefault();
        setError(null);

        if (name != "" && code != "") {

            const formData = {
                name: name,
                code: code
            }

            const add = await fetch('http://127.0.0.1:3001/postLanguages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token") || ''
                },
                body: JSON.stringify(formData)
            });

            const content = await add.json();
            setSubmitted(true)
            if (content.login) {
                router.push('/home');
            } else {
                setError(content.error);
            }

        }


    };

    return (
      <>
        <div className='w-full text-center px-4'>
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Back</Link>
          {!submitted && <form className='w-full' onSubmit={addLanguage}>
              <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Add Language Form</span>
              <div className='w-full py-2'>
                  <label htmlFor="" className='text-sm font-bold py-2 block'>Name</label>
                  <input type='text' name='name' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setName(e.target.value)} />
              </div>
              <div className='w-full py-2'>
                  <label htmlFor="" className='text-sm font-bold py-2 block'>Code</label>
                  <textarea name='login' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setCode(e.target.value)} />
              </div>
        
              <div className='w-full py-2'>
                  <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Submit</button>
              </div>
              <div>
                  {error && <div className="p-2 text-white border-gray-200 border-[1px] rounded-sm bg-red-400" style={{ color: 'red' }}>{error}</div>}
              </div>
          </form>}
          {submitted && <p className="text-xl font-bold py-2 my-2 block text-black">
            Success, Language created!
          </p>}
        </div>
      </>
    )
}