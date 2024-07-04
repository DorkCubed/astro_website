import "./projects.css";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";

function Projects() {
    return (
        <>
            <Helmet>
                <title> Projects </title>
            </Helmet>

            <div className="projects">
                <Nav />
                <div className="title-container">
                    <h1> Projects </h1>
                </div>
            </div>
        </>
    )
};

export default Projects;