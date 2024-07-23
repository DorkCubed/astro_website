import logo from './assets/logo.png'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul class="navigation">
                <li><a href="index.html" target="_blank"></a><img id='navImg' src={logo} alt="ASTRO" /></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">BLOGS</a></li>
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">FEST EVENTS</a></li>
            </ul>
        </nav>

    );
}

export default Navbar