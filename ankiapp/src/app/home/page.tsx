import React from "react";
import Link from "next/link";

export default function Home(){

    return (
        <>
        <div>
            <br></br>
            <h1 className="text-2xl font-bold">Languages</h1>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/language/create">Create new language</Link>
            <br></br>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/language/list">List all languages</Link>
            <br></br><br></br>
            <h1 className="text-2xl font-bold">Anki</h1>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/anki/create">Create new anki</Link>
            <br></br>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/anki/list">List all ankis</Link>
            <br></br><br></br>
            <h1 className="text-2xl font-bold">Cards</h1>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/cards/create">Create new cards</Link>
            <br></br>
            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/cards/list">List all cards</Link>
            <br></br><br></br>
        </div>
        </>
    );
}