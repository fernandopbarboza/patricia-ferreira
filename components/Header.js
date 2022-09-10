import React from 'react'

function Header(){
    return(
        <div>
            <header className="s-header">

            <div className="row">
                <div className="header-logo">
                    <a className="site-logo" href="index.html">
                        <img src="src/images/logo.svg" alt="Homepage"/>
                    </a>
                </div>

                <nav className="header-nav-wrap">
                    <ul className="header-main-nav">
                        <li className="current"><a className="smoothscroll" href="#home" title="intro">Intro</a></li>
                        <li><a className="smoothscroll" href="#about" title="about">About</a></li>
                        <li><a className="smoothscroll" href="#features" title="features">Features</a></li>
                        <li><a className="smoothscroll" href="#pricing" title="pricing">Pricing</a></li>
                        <li><a className="smoothscroll" href="#download" title="download">Download</a></li>	
                    </ul>

                    <div className="header-cta">
                        <a href="#download" className="btn btn--primary header-cta__btn smoothscroll">Get The App</a>
                    </div>
                </nav> 

                <a className="header-menu-toggle" href="#"><span>Menu</span></a>
            </div>

            </header>
        </div>
    )
}

export default Header