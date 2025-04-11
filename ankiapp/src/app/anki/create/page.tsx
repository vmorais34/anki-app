"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AnkiCreate() {

    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [users, setUsers] = useState(new Array());
    const [userId, setUserId] = useState<string>('');
    const [languages, setLanguages] = useState(new Array());
    const [languageId, setLanguageId] = useState<string>('');

    // Puxa Usuários
    useEffect(() => {
        if(users?.length == 0){
            fetch('http://127.0.0.1:3001/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token") || ''
                },
            }).then(response => response.json())
            .then(data => {
                setUsers(data);
            });
        }
    }, [users]);

    
    useEffect(() => {
        if(languages?.length == 0){
            fetch('http://127.0.0.1:3001/languages', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token") || ''
                },
            }).then(response => response.json())
            .then(data => {
                setLanguages(data);
            });
        }
    }, [languages]);

    const addAnki = async (e: any) => {
        e.preventDefault();
        setError(null);

        if (name != "" && userId != "" && languageId != "") {
            const formData = {
                name: name,
                userId: userId,
                languageId: languageId
            }
            
            const add = await fetch('http://127.0.0.1:3001/postAnki', {
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
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Voltar</Link>
          {!submitted && 
            <form className='w-full' onSubmit={addAnki}>
                <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Add Anki Form</span>
                <div className='w-full py-2'>
                    <label htmlFor="" className='text-sm font-bold py-2 block'>Name of Anki</label>
                    <input type='text' name='name' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setName(e.target.value)} />
                </div>
                
                <div className='w-full py-2'>
                    <label htmlFor="" className='text-sm font-bold py-2 block'>Select User</label>
                    <select id="userId" onChange={(e: any) => setUserId(e.target.value)}>
                        <option value="empty" selected> Select User</option>
                        {users.map((user, i) =><option key={i} value={user._id}>{user.name}</option> )}
                    </select>
                </div>

                <div className='w-full py-2'>
                    <label htmlFor="" className='text-sm font-bold py-2 block'>Select Language</label>
                    <select id="languageId" onChange={(e: any) => setLanguageId(e.target.value)}>
                        <option value="empty" selected> Select Language</option>
                        {languages.map((language, i) =><option key={i} value={language._id}>{language.name}</option> )}
                    </select>
                </div>
            
                <div className='w-full py-2'>
                    <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Submit</button>
                </div>
                <div>
                    {error && <div className="p-2 text-white border-gray-200 border-[1px] rounded-sm bg-red-400" style={{ color: 'red' }}>{error}</div>}
                </div>
            </form>
          }
          {submitted && <p className="text-xl font-bold py-2 my-2 block text-black">
            Success, Anki created!
          </p>}
        </div>
      </>
    )
}