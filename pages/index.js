import Link from 'next/link';
import "../src/css/base.css";
import "../src/css/vendor.css";
import "../src/css/main.css";
import "../src/js/jquery-3.2.1.min.js";
import "../src/js/plugins.js";
import "../src/js/main.js";
import "../src/js/modernizr.js";
import "../src/js/pace.min.js";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import AboutHow from "./AboutHow";


function Home(){
    
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