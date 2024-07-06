import { useEffect, useState } from 'react';
import { useInteractions, useFloating, useHover } from "@floating-ui/react";

interface ShinyProps {
    Name: string;
    Class: string;
}

function Shiny(props: ShinyProps) {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setCursorX(event.clientX);
            setCursorY(event.clientY);
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
    });
    const hover = useHover(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    return (
        <>
            <p className={props.Class}
                ref={refs.setReference} {...getReferenceProps()}    >
                {props.Name}
            </p>
            {isOpen && (
                <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}
                >
                    <div className="shiny"
                        style={{ position: 'relative', left: cursorX, top: cursorY }} >
                    </div>
                </div >
            )
            }
        </>
    );
}

export default Shiny;


