import "../../pages/projects.css";
import JWST1 from "/projects/jwst1.png"
import JWST2 from "/projects/jwst2.png"


function JWST() {
    const text: string[] = ["During the first semester of the academic year 2023-2024, our projects team did a project on processing and visualization of jwst data.",

        "We used open source data from the James Webb Space Telescope, available as FITS files and extracted the features from them using Astropy in python. FITS stands for ‘Flexible image transport system’. A FITS file contains data associated with scientific images and is the most commonly used format in Astronomy.",

        "Three separate images in the red, green and blue spectra, which were captured using filters on the telescope, were merged to create these full color images. Each image was resized to use them all together, as now they had the same number of features.",

        "Finally, since some astronomical objects emit light mainly in the Infrared region, we incorporated this by fine-tuning the color mapping and obtained an accurate false color image to make these features visible."];

    return (
        <div style={{ width: "100%", height: "100%", flexShrink: "0" }}>
            <h1 style={{ width: "100%", textAlign: "center" }}>JWST IMAGE PROCESSING</h1>
            <div className="project-info">
                <p>{text[0]}<br />{text[1]}</p>
                <p>{text[2]}<br />{text[3]}</p>
                <img src={JWST1} />
                <img src={JWST2} />
            </div >
        </div >
    );
}

export default JWST;