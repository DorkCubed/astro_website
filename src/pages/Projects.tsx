import "./projects.css";
import Nav from "../components/Nav";
import Cards from "../components/projects/Cards";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "./Loader";

function Projects() {
    const placeholder = "/not-not-blank.png";

    return (
        <>
            <Loader />

            <Helmet>
                <title>Projects</title>
                <meta name="description" content="Our projects and their stories, to showcase and inspire." />
            </Helmet>

            <div className="projects">
                <Nav />
                <div className="content">
                    <Outlet />
                    <div className="title-container">
                        <Cards Name="PROJECTS" Class="a" Image={placeholder} NextPage="" />
                        <Cards Name="ZENITH" Class="b" Image="/projects/zenith_bg.png" NextPage="zenith" />
                        <Cards Name="JWST IMAGE PROCESSING" Class="c" Image="/projects/jwst_bg.png" NextPage="jwst_image_processing" />
                        <Cards Name="COMING SOON..." Class="d" Image={placeholder} NextPage="" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Projects;