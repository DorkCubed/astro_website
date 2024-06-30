import Picture from "./Picture";

/* interface portraitData {
    src: string;
    alt: string;
    name: string;
    subtitle: string;
    clicklink: string;
} */

function PortraitCollection() {
    return (
        <>
            <div className="align-center">
                <div className="potrait-divs-container">
                    <Picture src="/not-not-blank.png" alt="Portrait 1" name="guy" subtitle="guy guy" clicklink="https://google.com" />
                    <Picture src="/not-not-blank.png" alt="Portrait 2" name="a guy" subtitle="not the guy" clicklink="https://google.com" />
                    <Picture src="/not-not-blank.png" alt="Portrait 3" name="gay guy" subtitle="super long gay guy loving guy" clicklink="https://google.com" />
                    <Picture src="/not-not-blank.png" alt="Portrait 4" name="the guy" subtitle="not just a guy" clicklink="https://google.com" />
                    <Picture src="/not-not-blank.png" alt="Portrait 5" name="not guy" subtitle="women amirite chat" clicklink="https://google.com" />
                    <Picture src="/not-not-blank.png" alt="Portrait 6" name="look a guy!" subtitle="surpsrise surprise" clicklink="https://google.com" />
                </div>
            </div>
        </>
    );
}

export default PortraitCollection;