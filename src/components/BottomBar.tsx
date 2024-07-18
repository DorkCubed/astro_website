import './bottom-bar.css';

function BottomBar() {
    return (
        <div className="bar-container">
            <div className="bar-bg">
                <div className="astro-logo" />
                <div className="line" />
                <div className="social-container">
                    <div className="social-button"><img src="/Instagram.svg" alt="instagram" /></div>
                    <div className="social-button"><img src="/twitter.svg" alt="twitter" /></div>
                    <div className="social-button"><img src="/linkedin.svg" alt="linkedin" /></div>
                    <div className="social-button"><img src="/fb.svg" alt="facebook" /></div>
                </div>
            </div>
        </div>
    );
}

export default BottomBar;