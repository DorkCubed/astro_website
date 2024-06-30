import Picture from "./Picture";

function PortraitCollection() {
    return (
        <>
            <div className="align-center">
                <div className="potrait-divs-container">
                    <Picture src="/not-not-blank.png" alt="Portrait 1" name="guy" subtitle="guy guy" clicklink="https://google.com" />
                    <Picture src="/not-not-blank.png" alt="Portrait 1" name="guy" subtitle="guy guy" clicklink="https://google.com" />
                    <Picture src="/not-not-blank.png" alt="Portrait 1" name="guy" subtitle="super long gay guy loving guy" clicklink="https://google.com" />
                    <Picture src="/not-not-blank.png" alt="Portrait 1" name="guy" subtitle="guy guy" clicklink="https://google.com" />
                    <Picture src="/not-not-blank.png" alt="Portrait 1" name="not guy" subtitle="women amirite chat" clicklink="https://google.com" />
                    <Picture src="/not-not-blank.png" alt="Portrait 1" name="guy" subtitle="guy guy" clicklink="https://google.com" />
                </div>
            </div>
        </>
    );
}

export default PortraitCollection;