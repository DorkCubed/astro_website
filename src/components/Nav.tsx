import astro_logo from "/layer1.svg";
import './Nav.css';
function Nav() {
    return (
        <>
            <nav>
                <a href=""><img src={astro_logo} alt="sky" /></a>
                <a href="">ABOUT US</a>
                <a href="">PROJECTS</a>
                <a href="">BLOGS</a>
                <a href="">GALLERY</a>
                <a href="">FEST EVENTS</a>
            </nav>
        </>
    )
}
export default Nav;