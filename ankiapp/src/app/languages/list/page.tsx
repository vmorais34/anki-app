"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LanguagueList() {
    const [languages, setLanguages] = useState(new Array());
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/languages', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        }).then(response => response.json())
        .then(data => setLanguages(data))
    }, [languages]);

    const deleteLanguage = async (id: any) => {
        const add = await fetch(`http://127.0.0.1:3001/languages/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        });
        const content = await add.json();
        // console.log(content);
        if (content.login) {
            window.location.reload();
        } else {
            setError(content.error);
        }
    }

    return (
        <>
            <div className='w-full text-center px-4'>
                <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Back</Link>
                <table>
                    <thead>
                        <tr>
                            <td className='border border-slate-300'>Name</td>
                            <td className='border border-slate-300 text-center'>Code</td>
                        </tr>
                    </thead>

                    <tbody className="languages" id="languages">
                        {!!languages && languages.map((language: any) => (
                            <tr>
                                <td className='border border-slate-300'>{language.name}</td>
                                <td className='border border-slate-300 text-center'>{language.code}</td>
                                
                                <td className='border border-slate-300 text-center'>
                                    <button onClick={(e) => deleteLanguage(language._id)} className='bg-red-500 p-2 inline-block text-white text-sm'>Delete</button></td>
                                <td className='border border-slate-300 text-center'>
                                <Link href={`/language/edit/${language._id}`} className='bg-yellow-500 p-2 inline-block ml-3 text-white text-sm'>Edit</Link></td>
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