import "./projects.css";
import Nav from "../components/Nav";
import Shiny from "../components/projects/Shiny";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

function Projects() {
    const placeholder = "/not-not-blank.png";

    return (
        <>
            <Helmet>
                <title> Projects </title>
            </Helmet>

            <div className="projects">
                <Nav />
                <div className="content">
                    <Outlet />
                    <div className="title-container" >
                        <Shiny Name="Projects" Class="a" Image={placeholder} />
                        <Shiny Name="Projects" Class="b" Image={placeholder} />
                        <Shiny Name="Projects" Class="c" Image={placeholder} />
                        <Shiny Name="Projects" Class="d" Image={placeholder} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Projects;