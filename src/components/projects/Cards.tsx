import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface CardsProps {
    Name: string;
    Class: string;
    Image: string;
    NextPage: string;
}

function Cards(props: CardsProps) {
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
                <div style={{ backgroundImage: `url(${props.Image})` }} />
                <a><Link to={props.NextPage}> {props.Name} </Link></a>
            </div>
        </div >
    );
}

export default Cards;