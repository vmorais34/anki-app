import React from "react";
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-full py-4 px-4 dark:bg-gray-900 text-center min-h-[360px] flex items-center justify-center flex-col gap-6'>
        <Link className="bg-green-800 rounded-md text-black dark:text-white text-2xl p-2 hover:underline" href="/login">	
          Login
        </Link>      
        <Link className="bg-orange-800 rounded-md text-black dark:text-white text-2xl p-2 hover:underline" href="/signup">	
          Cadastre-se
        </Link>
    </div>
  )
}
