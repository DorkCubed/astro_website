import "./projects.css";
import Nav from "../components/Nav";
import Shiny from "../components/projects/NewShiny";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function Projects() {
    const placeholder = "/not-not-blank.png";

    useEffect(() => {
        const cards = document.querySelectorAll('.card-overlay') as NodeListOf<HTMLElement>;

        cards.forEach((card) => {
            function handleWindowResize() {
                card.style.backgroundPositionX = `-${card.getBoundingClientRect().left}px`;
                card.style.backgroundPositionY = `-${card.getBoundingClientRect().top}px`;
            }

            handleWindowResize();
            window.addEventListener("resize", handleWindowResize);

            return () => window.removeEventListener("resize", handleWindowResize);
        })
    }, [])

    return (
        <>
            <Helmet>
                <title> Projects </title>
            </Helmet>

            <div className="projects">
                <Nav />
                <div className="title-container" >
                    <Shiny Name="Projects" Class="a" Image={placeholder} />
                    <Shiny Name="Projects" Class="b" Image={placeholder} />
                    <Shiny Name="Projects" Class="c" Image={placeholder} />
                    <Shiny Name="Projects" Class="d" Image={placeholder} />
                </div>
            </div>
        </>
    )
};

export default Projects;