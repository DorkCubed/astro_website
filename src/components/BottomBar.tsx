import './bottom-bar.css';

function BottomBar() {
    return (
        <div className="bottom-bar-container">
            <div className="bar-bg">
                <div className="astro-logo" onClick={() => window.location.href = "/"} />
                <div className="line" />
                <div className="social-container">
                    <div className="social-button"><img src="/Instagram.svg" alt="instagram" onClick={() => window.location.href = "https://google.com"} /></div>
                    <div className="social-button"><img src="/twitter.svg" alt="twitter" /></div>
                    <div className="social-button"><img src="/linkedin.svg" alt="linkedin" /></div>
                    <div className="social-button"><img src="/fb.svg" alt="facebook" /></div>
                </div>
            </div>
        </div>
    );
}

export default BottomBar;