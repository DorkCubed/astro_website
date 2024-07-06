import { useState } from "react";
import { useInteractions, useClientPoint, useFloating, useHover, offset } from "@floating-ui/react";
import shine from "/shine.png";

interface ShinyProps {
    Name: string;
    Class: string;
}

function Shiny(props: ShinyProps) {
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        middleware: [offset({ mainAxis: -60 })],
        open: isOpen,
        onOpenChange: setIsOpen,
    });

    const clientPoint = useClientPoint(context);
    const hover = useHover(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([hover, clientPoint]);

    return (
        <div className={`item ${props.Class}`}
            ref={refs.setReference} {...getReferenceProps()}>
            <div className="shine-bordered" />
            {isOpen &&
                <div className="shine-container"
                    ref={refs.setFloating}
                    {...getFloatingProps()}
                    style={floatingStyles}>
                    <img src={shine} />
                </div>}
            <p> {props.Name} </p>
        </div>
    );
}

export default Shiny;