import React from 'react'

function Header(){
    return(
        <div>
            <header className="s-header">
                <div className="row">
                    <div className="header-logo">
                        <a className="site-logo" href="index.html">
                            <Image src="src/images/logo.svg" alt="Homepage"/>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header