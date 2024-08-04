import './bottom-bar.css';

function BottomBar() {
    return (
        <div className="bottom-bar-container">
            <div className="bar-bg">
                <div className="astro-logo" onClick={() => window.location.href = "/"} />
                <div className="line" />
                <div className="social-container">
                    <div className="social-button"><img src="/Instagram.svg" alt="instagram" onClick={() => window.open("https://www.instagram.com/astroclub.bitsp/", "_blank")} /></div>
                    <div className="social-button"><img src="/twitter.svg" alt="twitter" onClick={() => window.open("https://x.com/bitsastroclub/", "_blank")} /></div>
                    <div className="social-button"><img src="/linkedin.svg" alt="linkedin" onClick={() => window.open("https://www.linkedin.com/company/astro-club-bits/", "_blank")} /></div>
                    <div className="social-button"><img src="/fb.svg" alt="facebook" onClick={() => window.open("https://www.facebook.com/astroclubbitspilani/", "_blank")} /></div>
                </div>
            </div>
        </div>
    );
}

export default BottomBar;