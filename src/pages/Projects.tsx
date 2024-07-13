import "./projects.css";
import Nav from "../components/Nav";
import Cards from "../components/projects/Cards";
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
                    <div className="title-container">
                        <Cards Name="Projects" Class="a" Image={placeholder} NextPage="zenith" />
                        <Cards Name="Projects" Class="b" Image={placeholder} NextPage="" />
                        <Cards Name="Projects" Class="c" Image={placeholder} NextPage="" />
                        <Cards Name="Projects" Class="d" Image={placeholder} NextPage="" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Projects;