import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styles from "../public/css/base.css";

function Header(){
    return(
        <div>
            <header className="s-header">
            <div className="row">
                <div className="header-logo">
                    <Link href="#">
                        <a className="site-logo">
                            <Image src="./" alt='Homepage'/>
                        </a>
                    </Link>
                </div>
            </div>
            </header>
        </div>
    )
}

export default Header