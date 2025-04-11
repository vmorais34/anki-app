import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import React from 'react'
import Link from "next/link";

export default function Header() {
  return (
    <>
        <div className='w-full bg-gray-300 py-4 px-3'>
          <div className="container mx-auto">
            <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><Link href="/home">My Anki App</Link></h1>
          </div>
        </div>
    </>
  )
}