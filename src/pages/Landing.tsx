import Earth from "../components/landing/Earth";
import Geminid from "../components/landing/Geminid";
import Stars from "../components/landing/Stars";
import Nav from "../components/Nav";
import './landing.css';

function Landing() {
    return (
        <div className="landing-container">
            <div className="navbar-container">
                <Nav />
            </div>
            <div className='heading'>
                <div className='astro_club'>
                    astro club
                </div>
                <div className='bits_pilani'>
                    bits pilani
                </div>
            </div>

            <Earth />
            <Geminid />
            <Stars />

        </div>);
}

export default Landing;