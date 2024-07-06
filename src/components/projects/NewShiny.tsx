import { useState, useEffect } from "react";

interface ShinyProps {
    Name: string;
    Class: string;
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
        <div className="card-container">
            <p>{props.Name}</p>
            <p style={{ position: 'absolute', top: cursorY, left: cursorX }}>{props.Class}</p>
        </div>
    );
}

export default Shiny;