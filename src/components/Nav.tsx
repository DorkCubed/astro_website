import astro_logo from "/club_logo.svg";
import { useState, useEffect } from "react";
import './Nav.css';
import { Link } from "react-router-dom";
import { useFloating, useDismiss, useClick, useInteractions, useTransitionStyles, autoUpdate, offset } from '@floating-ui/react';
import hamburger from "/hamburger.svg";

const DesktopNavBar = (
    <nav>
        <a href='/'><img src={astro_logo} alt="sky" /></a>
        <a href='/about'>ABOUT US</a>
        <a href='/projects'>PROJECTS</a>
        <a href='/blogs'>BLOGS</a>
        <a href='/gallery'>GALLERY</a>
        <a href='/events'>FEST EVENTS</a>
    </nav>
)

function getWindowSize() {
    return [window.innerWidth, window.innerHeight];
}

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const { refs, floatingStyles, context } = useFloating({
        middleware: [offset(10)],
        whileElementsMounted: autoUpdate,
        open: isOpen,
        onOpenChange: setIsOpen,
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const { isMounted, styles } = useTransitionStyles(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

    useEffect(() => {
        function handleWindowResize() { setWindowSize(getWindowSize()) }
        window.addEventListener('resize', handleWindowResize);
        return () => { window.removeEventListener('resize', handleWindowResize); }
    }, []);

    const MobNavBar = (
        <>
            <nav ref={refs.setReference}>
                <a {...getReferenceProps()}>
                    <Link reloadDocument={true} to={'/'}><img src={astro_logo} alt="sky" /></Link>
                </a>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <img src={hamburger} alt="menu" />
                </div>
            </nav>
            {isMounted &&
                <nav className="mnav"
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}>
                    <div className="manchor mnav" style={{ ...styles }}>
                        <a href='/about'>ABOUT US</a>
                        <a href='/projects'>PROJECTS</a>
                        <a href='/blogs'>BLOGS</a>
                        <a href='/gallery'>GALLERY</a>
                        <a href='/events'>FEST EVENTS</a>
                    </div>
                </nav>
            }
        </>
    )

    return (
        <>
            {windowSize[0] > windowSize[1] ? DesktopNavBar : MobNavBar}
        </>
    )
}
export default Nav;