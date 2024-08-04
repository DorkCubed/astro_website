import "../../pages/projects.css";
import JWST1 from "/projects/zenith_1.jpg"
import JWST2 from "/projects/zenith_2.jpg"


function Zen() {
    const text: string[] = ["During the second semester of the academic year 2023-24, our projects team built a model rocket from scratch, christened Zenith after our unofficial mascot, a dog which lives near FD-III. Our aim: to be the first group of undergraduates to launch a model rocket at BITS Pilani. With a launch slated for APOGEE, our college’s tech-fest, work soon began. The first task was designing the motor. We started with OpenRocket to design and model Zenith over the winter break. Once back, we ran multiple simulations to get the right chamber pressure and thrust values. After months of work, the motor, similar to an I205, was ready. As for the fuel, we chose Richard Nakka’s KNDX recipe with 65% KNO3 (the oxidizer) and 35% fuel (dextrose).",

        "Simultaneously, we worked out the mechanism for recovery. An altimeter would detect when we start losing elevation post apogee, which would then send current to the 2 ejection charges placed in the nose cone. These would open up the body of the rocket, allowing the parachute, which we made, to unfold and bring our rocket down safely. Recovery would be impossible with avionics, who were involved in building the deployment circuit for firing the ejection charges. Components of the flight computer, Eggtimer Quark, were shipped in from the US. Meanwhile, recovery was busy determining the dimensions for the parachute and the shock cord to connect it to the system. Needless to say it was a team effort and would have been impossible without collaboration and coordination.",

        "All of this took a lot of “burning the midnight oil”, experimentation and coffee. The team clocked nearly a hundred hours on Fusion 360, the software we used to model individual parts. As for the nose cone and fins, we got them 3D printed. We used an off-the-shelf cardboard body tube to house all the electronics, the parachute and the motor. About a week before the fest, we had a test launch at the Birla Gliding Club near campus, to see the rocket in action. On 6th April 2024, amidst 600 or so onlookers, we mounted the rocket onto the aluminum launchpad. The final assembly weighed around 1.7kg when fully fueled, and stood at a height of 137 cm from tip to tail. Our mission objectives were to reach around 700m. At around 5:30 PM, IST, Astro Club, BITS Pilani ignited Zenith’s motors, and the rocket soared to the skies with grace. Despite an angled launch, Zenith reached an apogee of 714m, during which it had a peak acceleration of 16 g, beating our own expectations.",

        "There is much to learn from Zenith. Recovery didn’t go as planned, and lots could be improved regarding the avionics and 3D printing of components. Yet Zenith is proof that a rag-tag bunch of college undergraduates, with just a big dream and loads of grit to back it up, can indeed pull off something unimaginable. Zenith is the first step to bigger, better and more ambitious attempts to reach the stars from Pilani."];

    return (
        <div style={{ width: "100%", height: "100%", flexShrink: "0" }}>
            <h1 style={{ width: "100%", textAlign: "center" }}>ZENITH</h1>
            <div className="project-info">
                <p>{text[0]}<br /><br />{text[1]}</p>
                <p>{text[2]}<br /><br />{text[3]}</p>
                <img src={JWST1} />
                <img src={JWST2} />
            </div >
        </div >
    );
}

export default Zen;