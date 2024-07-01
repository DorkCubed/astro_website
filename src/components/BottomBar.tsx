import './bottom-bar.css';

function BottomBar() {
    return (
        <div className="bar-container">
            <div className="bar-bg">
                <div className="astro-logo" />
                <div className="line" />
                <div className="social-container">
                    <div className="social-button"><img src="/insta.png" alt="instagram" /></div>
                    <div className="social-button"><img src="/twitter.png" alt="twitter" /></div>
                    <div className="social-button"><img src="/linkedin.png" alt="linkedin" /></div>
                    <div className="social-button"><img src="/fb.png" alt="facebook" /></div>
                </div>
            </div>
        </div>
    );
}

export default BottomBar;