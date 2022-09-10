import Link from 'next/link'
import React from 'react'

function Header(){
    return(
        <div>
            <header className="s-header">
                <div className="row">
                    <div className="header-logo">
                        <Link href="index.html">
                            <a className="site-logo">
                                <Image src="src/images/logo.svg" alt="Homepage"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header