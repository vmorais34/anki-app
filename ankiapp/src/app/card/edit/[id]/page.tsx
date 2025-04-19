"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Input, Select } from '@headlessui/react'

export default function CardEdit(params: any) {

    const router = useRouter();

    const [front, setFront] = useState<string>('');
    const [back, setBack] = useState<string>('');
    const [context, setContext] = useState<string>('');
    const [ankiId, setAnkiId] = useState<string>();
    const [reviewStatics, setReviewStatics] = useState({
        lastReviewed: new Date(), // Inicializa com a data e hora atual
        correctCount: 0,
        incorrectCount: 0,
      });
    const [cards, setCards] = useState({front, back, context, ankiId, reviewStatics});
    const [ankis, setAnkis] = useState(new Array());
    const [error, setError] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const id = params.params.id;

    // Card
    useEffect(() => {
        fetch('http://127.0.0.1:3001/getCard/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
        }).then(response => response.json())
        .then(data => {
            setCards(data);
        })
    }, [cards]);

   
    useEffect(() => {
        if(ankis?.length == 0){
            fetch('http://127.0.0.1:3001/ankis', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token") || ''
                },
            }).then(response => response.json())
            .then(data => {
            setAnkis(data);
            });
        }
        // console.log("ankis", ankis, ankiId)
    }, [ankis]);

    const edit = async (e: any) => {
        e.preventDefault();
        setError(null);


        //Caso a variavel esteja vazia, vamos usar o valor que foi carregado pela página, caso ela esteja preenchida, vamos colocar o novo valor
        const formData = {
            front: front || cards.front,
            back: back || cards.back,
            context: context || cards.context,
            ankiId: ankiId ||cards.ankiId,
            reviewStatics: {
                lastReviewed: reviewStatics.lastReviewed || cards.reviewStatics.lastReviewed,
                correctCount: reviewStatics.correctCount || cards.reviewStatics.correctCount,
                incorrectCount: reviewStatics.incorrectCount || cards.reviewStatics.incorrectCount
            }
        }
        // console.log("formData", formData)

        const add = await fetch('http://127.0.0.1:3001/cards/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token") || ''
            },
            body: JSON.stringify(formData)
        });

        const content = await add.json();

        if (content.date) {
            router.push('/home');
        } else {
            setError(content.error);
        }

    };

    return (
        <>
            <div className='w-full container mx-auto py-4 block'>
                <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/card/list">Voltar</Link>
                {!submitted && 
                <form className='w-full' onSubmit={edit}>
                    <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Form Card Edit</span>
                    <div className='w-full py-2'>
                        <label htmlFor="" className='text-sm font-bold py-2 block'>Front</label>
                        <Input type='text' defaultValue={cards.front} name='front' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setFront(e.target.value)} />
                    </div>
                    <div className='w-full py-2'>
                        <label htmlFor="" className='text-sm font-bold py-2 block'>Back</label>
                        <Input type='text' defaultValue={cards.back} name='back' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setBack(e.target.value)} />
                    </div>
                    <div className='w-full py-2'>
                        <label htmlFor="" className='text-sm font-bold py-2 block'>Context</label>
                        <Input type='text' defaultValue={cards.context} name='context' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setContext(e.target.value)} />
                    </div>
                    <div className='w-full py-2'>
                        <label htmlFor="" className='text-sm font-bold py-2 block'>Anki</label>
                        <Select id="ankiId" name="ankiId" aria-label="AnkiId" onChange={(e: any) => setAnkiId(e.target.value)}>
                            {ankis.map((anki, i) =><option key={i} selected={cards.ankiId === anki._id ? true : false} value={anki._id}>{anki.name}</option> )}
                        </Select>
                        {/* <select id="pacientId" onChange={(e: any) => setPacientId(e.target.value)}>
                            {pacients.map((pacient, i) =><option key={i} selected={appointment.pacientId === pacient._id ? true : false} value={pacient._id}>{pacient.name}</option> )}
                        </select> */}
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
                    Success, Card Edited!
                </p>}
            </div>
        </>
    )
}