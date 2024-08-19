import Nav from '../components/Nav';
import { Helmet } from 'react-helmet';
import InfoCard from '../components/fest-events/infocard';
import './fest-events.css';
import Loader from './Loader';


function FestEvents() {
    return (
        <>
            <Loader />

            <Helmet>
                <title>Fest Events</title>
                <meta name="description" content="Join us at Apogee or Oasis and experience our events." />
            </Helmet>

            <div className='fest'>
                <Nav />

                <div className="fest-content">
                    <div className='title'><p>FEST EVENTS</p></div>
                    <div className="a" >
                        <InfoCard Class="left" Name="Night's Watch" Text="One of our flagship events, Night’s Watch is an experience set up by our club. We guide you through the many little wonders of the sky, the stories behind them and also give you a glance of the cosmos through our telescopes." />
                        <InfoCard Class="right" Name="T Minus 10" Text="Our most daring event, taking us a semester’s worth of design, engineering, testing and most importantly dedication, all to build and launch our very own model rocket. Last time our rocket, Zenith reached an apogee of 714m, acceleration of 16g’s, reaching a top speed of 750kmph and witnessed live by over 600 people." />
                    </div>
                    <div className="b" >
                        <InfoCard Class="left" Name="Quizzar" Text="An astronomy-themed pop culture quiz, Quizzar is for the maniacal hitchhikers and Skywalkers with shelves filled with volumes and VCDs. Teams compete against each other in multiple rounds in an attempt to score as many points as possible. The winning team claims a cash prize." />
                        <InfoCard Class="right" Name="42" Text="A technically challenging quiz, which tests your astronomical acumen. Teams traverse multiple storylines and universes and are made to puzzle out the answers to the challenges laid in front of them. They compete against each other in multiple rounds. The winning team wins a cash prize." />
                    </div>
                    <div className="c" >
                        <InfoCard Class="left" Name="AstroPixel" Text="An online competition open to colleges all over the country; Astropixel is aimed at our astrophotography enthusiasts. Send in your best click of your local night sky and get a chance to win exciting prizes." />
                        <InfoCard Class="right" Name="Everyone Dies" Text="A one of a kind event, where you are given a ridiculous scenario, where your objective is to find an even more ridiculous way to cause mass genocide, killing everyone. You will be judged on your creativity, efficiency and innovation." />
                    </div>
                    <div className="d" >
                        <InfoCard Class="center" Name="SMS" Text="A space mission simulator. Using the fan-favourite Kerbal Space Program, this event offers a workshop to train newcomers. followed by a competition where teams race the clock to build their own shuttles and launch to the moon." />
                    </div>
                </div>

            </div>
        </>
    );
}

export default FestEvents;
