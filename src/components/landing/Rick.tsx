import "./Rick.css";
import { useState } from "react";

function play() {
    return (
        <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0">
        </iframe>
    )
}

function Rick() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="rick-button" onClick={() => setIsClicked(true)}>
            {isClicked ? play() : <div className="rocket">🚀</div>}
        </div>
    )
}

export default Rick;