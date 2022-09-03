import {useState} from 'react';
import Link from 'next/link';

function Sobre() {
    return (
    <div>
        <div>Sobre</div>

        <Link href='/home'>
            <a >Acessar pagina home</a>
        </Link>
    </div>
    )

}

export default Sobre