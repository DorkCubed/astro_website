import { useState } from 'react';

interface PictureProps {
    src: string;
    alt: string;
    name: string;
    subtitle: string;
    clicklink: string;
}

function Picture(props: PictureProps) {
    let [isHovered, setIsHovered] = useState(false);

    return (
        <div className="potrait-images-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={props.src} alt={props.alt} onClick={() => window.location.href = props.clicklink} />
            {isHovered ?
                (<p className="portrait-learn-more">Click to learn more</p>) :
                (<p className="portrait-learn-more"><br /></p>)
            }
            <span className="potrait-text-container">
                <h3>{props.name}</h3>
                <h3>{props.subtitle}</h3>
            </span>
        </div>
    );
}

export default Picture;