import { useState, useEffect } from "react";
import './loader.css';

const FlavourText = [
    "Adjusting the speed of light",
    "Aligning all 14 Planets",
    "Ammending the Laws of Physics",
    "Calling an Orbital Mechanic",
    "Finding the Magnifying Glass",
    "Cleaning the Terrace",
    "Pressing the Red Button",
    "Proving Murphy's Law",
    "Tasting 9V Batteries",
    "Waiting for a New Moon",
    "Duct taping Zenith",
    "Conserving momentum",
    "Patching bugs in the Ozone Layer",
    "Dilating time to get more sleep",
    "Orbiting the Sun",
    "Finding the specified impulse",
    "Getting 106% efficiency",
    "Calling up the universe",
    "Losing to Entropy",
    "Taking a small step for man",
    "Surfing gravitational waves",
    "Lighting up dark matter",
    "Painting the nebulae"]


function Loader() {
    const toDisplay = Math.floor(Math.random() * FlavourText.length);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        function handleLoad() {
            setIsLoading(false);
        }
        setTimeout(handleLoad, 2000);

    });

    return (
        <>
            {isLoading &&
                <div className="loader-wrapper">
                    <div className="loader-screen">
                        <div className="spinner-border" />
                        <p>{FlavourText[toDisplay]}</p>
                    </div>
                </div>}
        </>
    );

}

export default Loader;