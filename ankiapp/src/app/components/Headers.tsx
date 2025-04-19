"use client"
import "../globals.css";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
      const token = sessionStorage.getItem("token") || "";
      token && setIsLogged(true)
  }, [])

  const logout = () => {
    sessionStorage.removeItem('token');
    router.push('/');
  }

  return (
    <>
        <div className='w-full bg-gray-300 py-4 px-3'>
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><Link href="/home">My Anki App</Link></h1>

            {isLogged && 
              <button className="text-lg dark:text-white flex items-center justify-center bg-gray-600 hover:bg-gray-500 rounded-sm p-2 transition-all" onClick={logout}>
                Logout
                
              </button>
            }
          </div>
        </div>
    </>
  )
}