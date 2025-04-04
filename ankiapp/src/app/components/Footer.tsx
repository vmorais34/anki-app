import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import React from 'react'
import Link from "next/link";

export default function Footer() {
  return (
    <>
        <footer className='text-center w-full bg-gray-300 py-4 px-3'>
          <div className="text-xs font-light leading-none tracking-tight text-gray-900 dark:text-white"><Link href="https://github.com/vmorais34"> Made With 💕 by Vinicius Morais</Link></div>
        </footer>
    </>
  )
}