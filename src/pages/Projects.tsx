import "./projects.css";
import Nav from "../components/Nav";
import Shiny from "../components/projects/NewShiny";
import { Helmet } from "react-helmet";

function Projects() {
    return (
        <>
            <Helmet>
                <title> Projects </title>
            </Helmet>

            <div className="projects">
                <Nav />
                <div className="title-container" >
                    <Shiny Name="Projects" Class="a" />
                    <Shiny Name="Projects" Class="b" />
                    <Shiny Name="Projects" Class="c" />
                    <Shiny Name="Projects" Class="d" />
                </div>
            </div>
        </>
    )
};

export default Projects;