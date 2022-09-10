import React from "react";
import { ReactDOM } from "react";

function Header(){
    return(
        <div>
            <div>
                <Link href="index.html">
                    <a>
                    <image src="images/logo.svg" alt="Homepage"/>
                    </a>
                </Link>
            </div>
    
            <nav>
                <ul>
                    <li><a href="#home" title="intro">Intro</a></li>
                    <li><a href="#about" title="about">About</a></li>
                    <li><a href="#features" title="features">Features</a></li>
                    <li><a href="#pricing" title="pricing">Pricing</a></li>
                    <li><a href="#download" title="download">Download</a></li>	
                </ul>
    
                <div>
                    <a href="#download">Get The App</a>
                </div>
            </nav> 
    
            <a href="#"><span>Menu</span></a>
        </div>
    )
}

export default Header;