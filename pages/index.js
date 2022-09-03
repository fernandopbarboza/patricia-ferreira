import {useState} from 'react';
import Link from 'next/link';

function Home() {
    return (
    <div>
        <div>Home</div>
        <Link href='/sobre'>
            <a >Acessar pagina sobre</a>
        </Link>
    </div>
    )

}

export default Home