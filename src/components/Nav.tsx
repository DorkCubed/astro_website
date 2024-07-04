import astro_logo from "/club_logo.svg";
import { useState, useEffect } from "react";
import './Nav.css';
import { Link } from "react-router-dom";
import { useFloating, useDismiss, useClick, useInteractions, useTransitionStyles, autoUpdate, offset } from '@floating-ui/react';
import hamburger from "/hamburger.svg";

const DesktopNavBar = (
    <nav>
        <a><Link to={'/'}><img src={astro_logo} alt="sky" /></Link></a>
        <a><Link to={'/about'}>ABOUT US</Link></a>
        <a><Link to={'/projects'}>PROJECTS</Link></a>
        <a><Link to={'/about'}>BLOGS</Link></a>
        <a><Link to={'/about'}>GALLERY</Link></a>
        <a><Link to={'/about'}>FEST EVENTS</Link></a>
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
                    <Link to={'/'}><img src={astro_logo} alt="sky" /></Link>
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
                        <a><Link to={'/about'}>ABOUT US</Link></a>
                        <a><Link to={'/projects'}>PROJECTS</Link></a>
                        <a><Link to={'/about'}>BLOGS</Link></a>
                        <a><Link to={'/about'}>GALLERY</Link></a>
                        <a><Link to={'/about'}>FEST EVENTS</Link></a>
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