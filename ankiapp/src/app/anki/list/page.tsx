"use client"
import React, { useEffect, useState } from 'react'; // HOOK = gancho
import Link from 'next/link';

export default function AnkiList() {
    const [anki, setAnki] = useState(new Array());
    const [error, setError] = useState<string | null>(null);
    const [users, setUsers] = useState(new Array());
    const [languages, setLanguages] = useState(new Array());

    useEffect(() => {
        if(anki?.length == 0){
            fetch('http://127.0.0.1:3001/ankis', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token") || ''
                },
            }).then(response => response.json())
            .then(data => {
            setAnki(data);
            });
        }
    }, [anki]);

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


    const deleteAnki = async (id: any) => {
        const add = await fetch(`http://127.0.0.1:3001/ankis/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        });
        const content = await add.json();

        if (content.date) {
            window.location.reload();
        } else {
            setError(content.error);
        }
    }

    const findUserName = (id: any) => {
        let name;

        users.map((user) => {
            if (user._id == id){
                name = user.name;
            }
        });
        
        return name;
    }

    const findLanguageName = (id: any) => {
        let name;

        languages.map((language) => {
            if (language._id == id){
                name = language.name;
            }
        });
        
        return name;
    }

    return (
        <>
            <div className='w-full container mx-auto py-4 block'>
                <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Voltar</Link>
                <table>
                    <thead>
                        <tr>
                            <td className='border border-slate-300'>Name</td>
                            <td className='border border-slate-300 text-center'>User</td>
                            <td className='border border-slate-300 text-center'>Language</td>
                        </tr>
                    </thead>

                    <tbody className="ankis" id="ankis">
                        {!!anki && anki.map((anki: any) => (
                            <tr key={anki._id}>
                                <td className='border border-slate-300'>{anki.name}</td>
                                <td className='border border-slate-300 text-center'><label>{ findUserName(anki.userId) } </label></td>
                                <td className='border border-slate-300 text-center'><label>{ findLanguageName(anki.languageId) } </label></td>
                                <td className='border border-slate-300 text-center'>
                                    <button onClick={(e) => deleteAnki(anki._id)} className='bg-red-500 p-2 inline-block text-white text-sm'>Delete</button></td>
                                <td className='border border-slate-300 text-center'>
                                    <Link href={`/anki/edit/${anki._id}`} className='bg-yellow-500 p-2 inline-block ml-3 text-white text-sm'>Edit</Link>
                                </td>
                                <td className='border border-slate-300 text-center'>
                                    <Link className='bg-green-500 p-2 inline-block ml-3 text-white text-sm' href={`/anki/${anki._id}/create`}>Create new Anki</Link>
                                </td>
                                {/* <td className='border border-slate-300 text-center'>
                                    <Link className='bg-green-500 p-2 inline-block ml-3 text-white text-sm' href="/anki/upload">Upload anki</Link>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {error && <div className="p-2 text-white border-gray-200 border-[1px] rounded-sm bg-red-400" style={{ color: 'red' }}>{error}</div>}
                </div>
            </div>
        </>
    )
}