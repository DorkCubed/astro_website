import astro_logo from "/layer1.svg";
import './Nav.css';
import { Link } from "react-router-dom";
function Nav() {
    return (
        <>
            <nav>
                <a><Link to={'/'}><img src={astro_logo} alt="sky" /></Link></a>
                <a><Link to={'/about'}>ABOUT US</Link></a>
                <a><Link to={'/projects'}>PROJECTS</Link></a>
                <a><Link to={'/about'}>BLOGS</Link></a>
                <a><Link to={'/about'}>GALLERY</Link></a>
                <a><Link to={'/about'}>FEST EVENTS</Link></a>
            </nav>
        </>
    )
}
export default Nav;