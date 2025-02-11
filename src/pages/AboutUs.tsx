import ClubPhoto from "../components/about-us/ClubPhoto";
import PortraitCollection from "../components/about-us/PortraitCollection";
import BottomBar from "../components/BottomBar";
import Nav from "../components/Nav";
import "./about-us.css";
import { Helmet } from "react-helmet";
import Loader from "./Loader";

const ClubDesc = "Greetings from Astro Club - we are a group of students united by our passion for astronomy, astrophysics, and all that lies above the Karman Line. We marvel at the cosmos, guided by our telescopes on the FD-III terrace, where we engage in discussions of celestial sciences, and sometimes witchcraft and cinema."

function AboutUs() {
  return (
    <>
      <Loader />

      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Learn more about us, or contact our members." />
      </Helmet>

      <div className="about-us">
        <Nav />
        <p className="title-text">ABOUT US</p>
        <ClubPhoto />
        <div className="club-description">
          <p> {ClubDesc} </p>
        </div>
        <h1 className="gallery-title">EXECUTIVE COMMITEE 24-25</h1>
        <PortraitCollection number={1} />
        <h1 className="gallery-title">EXTENDED EXECUTIVE COMMITEE 24-25</h1>
        <PortraitCollection number={2} />
        <h1 className="gallery-title">MEET THE DEVS</h1>
        <PortraitCollection number={3} />
        <BottomBar />
      </div>
    </>
  );

}

export default AboutUs
