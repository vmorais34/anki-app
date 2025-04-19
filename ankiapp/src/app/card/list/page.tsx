"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CardList() {
    const [anki, setAnki] = useState(new Array());
    const [cards, setCards] = useState(new Array());
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
        if(cards?.length == 0){
            fetch('http://127.0.0.1:3001/cards', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token") || ''
                },
            }).then(response => response.json())
            .then(data => {
            setCards(data);
            });
        }
        // console.log("cards", cards)
    }, [cards]);

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


    const deleteCards = async (id: any) => {
        const add = await fetch(`http://127.0.0.1:3001/cards/${id}`, {
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

    return (
        <>
            <div className='w-full container mx-auto py-4 block'>
                <div className='w-full flex flex-row justify-between my-4 items-center'>
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/home">Voltar</Link>
                    <Link className='bg-green-500 p-2 inline-block ml-3 text-white text-sm' href={`/card/create`}>Create new Card</Link>
                </div>
                                
                <table>
                    <thead>
                        <tr>
                            <td className='border border-slate-300'>Front</td>
                            <td className='border border-slate-300 text-center'>Back</td>
                            <td className='border border-slate-300 text-center'>Context</td>
                            {/* <td className='border border-slate-300 text-center'>AnkiId</td> */}
                            <td className='border border-slate-300 text-center'>correctCount</td>
                            <td className='border border-slate-300 text-center'>incorrectCount</td>
                            <td className='border border-slate-300 text-center'>lastReviewed</td>
                        </tr>
                    </thead>

                    <tbody className="cards" id="cards">
                        {!!cards && cards.map((card: any) => (
                            <tr key={card._id}>
                                <td className='border border-slate-300'>{card?.front}</td>
                                <td className='border border-slate-300'>{card?.back}</td>
                                <td className='border border-slate-300'>{card?.context}</td>

                                {/* <td className='border border-slate-300 text-center'><label>{ findUserName(card?.ankiId) } </label></td> */}
                                <td className='border border-slate-300'>{card?.reviewStatics?.correctCount}</td>
                                <td className='border border-slate-300'>{card?.reviewStatics?.incorrectCount}</td>
                                <td className='border border-slate-300'>{card?.reviewStatics?.lastReviewed}</td>

                                <td className='border border-slate-300 text-center'>
                                    <button onClick={(e) => deleteCards(card._id)} className='bg-red-500 p-2 inline-block text-white text-sm'>Delete</button>
                                </td>
                                <td className='border border-slate-300 text-center'>
                                    <Link href={`/card/edit/${card._id}`} className='bg-yellow-500 p-2 inline-block ml-3 text-white text-sm'>Edit</Link>
                                </td>
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