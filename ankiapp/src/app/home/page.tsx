import React from "react";
import Link from "next/link";

export default function Home(){

    return (
        <>
        <div className='w-full text-center px-4'>
            <div>
                <br></br>
                <h1 className="text-2xl font-bold">Languages</h1>
                <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/languages/create">Create new language</Link>
                <br></br>
                <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/languages/list">List all languages</Link>
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

            {/* <div>
                <h2>
                    Design System of my Application
                </h2>
                <div>
                    <p>
                        Common components:
                    </p>
                    <ul>
                        <li>
                            Titles
                        </li>
                        <li>
                            Form
                        </li>
                        <li>
                            Button = Back, send and retry
                        </li>
                        <li>
                            Card
                        </li>
                    </ul>
                </div>
            </div> */}
        </div>
        </>
    );
}