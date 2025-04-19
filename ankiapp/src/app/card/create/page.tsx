"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CardCreate() {

    const router = useRouter();

    const [front, setFront] = useState<string>('');
    const [back, setBack] = useState<string>('');
    const [context, setContext] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [ankis, setAnkis] = useState(new Array());
    const [ankiId, setAnkiId] = useState<string>('');

    // Puxa Ankis
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
        console.log("ankis", ankis, ankiId)
    }, [ankis]);

    const addCard = async (e: any) => {
        e.preventDefault();
        setError(null);

        if (front != "" && back != "" && context != "" && ankiId != "") {
            const formData = {
                front: front,
                back: back,
                context: context,
                ankiId: ankiId,
                reviewStatics: {
                    lastReviewed: "",
                    correctCount: 0,
                    incorrectCount: 0
                }
            }
            
            const add = await fetch('http://127.0.0.1:3001/postCard', {
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
            <form className='w-full' onSubmit={addCard}>
                <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Add Card Form</span>
                <div className='w-full py-2'>
                    <label htmlFor="" className='text-sm font-bold py-2 block'>Text Front Card</label>
                    <input type='text' name='front' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setFront(e.target.value)} />
                </div>

                <div className='w-full py-2'>
                    <label htmlFor="" className='text-sm font-bold py-2 block'>Text Back Card</label>
                    <input type='text' name='back' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setBack(e.target.value)} />
                </div>

                <div className='w-full py-2'>
                    <label htmlFor="" className='text-sm font-bold py-2 block'>Text Context Card</label>
                    <input type='text' name='context' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e: any) => setContext(e.target.value)} />
                </div>

                <div className='w-full py-2'>
                    <label htmlFor="" className='text-sm font-bold py-2 block'>Select Anki</label>
                    <select id="ankiId" onChange={(e: any) => setAnkiId(e.target.value)}>
                        <option value="empty" selected> Select Anki</option>
                        {ankis.map((anki, i) =><option key={i} value={anki._id}>{anki.name}</option> )}
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
            Success, Card created!
          </p>}
        </div>
      </>
    )
}