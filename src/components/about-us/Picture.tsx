import { useState, useRef } from 'react';
import { useFloating, useHover, useInteractions, safePolygon, autoUpdate, FloatingArrow, arrow, offset, autoPlacement } from '@floating-ui/react';

interface PictureProps {
    src: string;
    alt: string;
    name: string;
    subtitle: string;
    clicklink: string;
}

function Picture(props: PictureProps) {
    let [isHovered, setIsHovered] = useState(false);

    const arrowRef = useRef(null);
    const { refs, floatingStyles, context } = useFloating({
        whileElementsMounted: autoUpdate,
        middleware: [arrow({ element: arrowRef }), offset(10), autoPlacement({ allowedPlacements: ['top', 'bottom'] })],
        open: isHovered,
        onOpenChange: setIsHovered,
    });

    const hover = useHover(context, { handleClose: safePolygon() });
    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    return (
        <div className="potrait-images-container">

            <img
                ref={refs.setReference}
                {...getReferenceProps()}
                src={props.src}
                alt={props.alt}
            />

            <span className="potrait-text-container">
                <h3>{props.name}</h3>
                <h3>{props.subtitle}</h3>
            </span>

            {isHovered &&
                (<div onClick={() => window.location.href = props.clicklink}
                    className="portrait-learn-more"
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}>
                    <FloatingArrow ref={arrowRef} context={context} />
                    LinkedIn
                </div>)
            }

        </div>
    );
}

export default Picture;