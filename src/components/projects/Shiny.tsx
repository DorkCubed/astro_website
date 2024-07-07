import { useState, useEffect } from "react";

interface ShinyProps {
    Name: string;
    Class: string;
    Image: string;
}

function Shiny(props: ShinyProps) {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);

    useEffect(() => {
        const card = document.querySelector('.card-container');

        if (card) {
            const handleMouseMove = (event: MouseEvent) => {
                setCursorX(event.clientX - card.getBoundingClientRect().left);
                setCursorY(event.clientY - card.getBoundingClientRect().top);
            };

            document.addEventListener("mousemove", handleMouseMove);

            return () => document.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (
        <div className={`card-wrapper ${props.Class}`} >
            <div className='card-container' />
            < div className="card" style={{
                position: 'absolute',
                top: cursorY,
                left: cursorX,
                pointerEvents: 'none',
                transition: '0.5s, top 0s, left 0s',
            }} />
            <div className="card-overlay">
                <img src={props.Image} alt={props.Name} />
                <p>{props.Name}</p>
            </div>
        </div >
    );
}

export default Shiny;