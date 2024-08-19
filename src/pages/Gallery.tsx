import Nav from "../components/Nav"
import Heading from "../components/gallery/Heading"
import Pictures from "../components/gallery/Pictures"
import Loader from "./Loader"
import { Helmet } from "react-helmet"
import "./gallery.css"

function Gallery() {
    return (
        <>
            <Helmet>
                <title>Gallery</title>
                <meta name="description" content="Vivid memories of some of our finest moments." />
            </Helmet>

            <Loader />
            <div className="gallery-container">
                <Nav />
                <Heading />
                <Pictures />

            </div>
        </>
    );
}

export default Gallery