import Picture from "./Picture";

interface CollenctionNumberProps {
    number: number;
}

const excom = (
    <>
        <Picture src="/not-not-blank.png" alt="Portrait 1" name="guy" subtitle="guy guy" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 2" name="a guy" subtitle="not the guy" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 3" name="gay guy" subtitle="super long gay guy loving guy" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 4" name="the guy" subtitle="not just a guy" clicklink="https://google.com" />
    </>
)

const extended_excom = (
    <>
        <Picture src="/not-not-blank.png" alt="Portrait 5" name="not guy" subtitle="women amirite chat" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 6" name="look a guy!" subtitle="surpsrise surprise" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 7" name="erm guy" subtitle="erm like um yeah" clicklink="https://google.com" />
    </>
);

const devs = (
    <>
        <Picture src="/not-not-blank.png" alt="Portrait 1" name="dev 1" subtitle="did things" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 2" name="dev 2" subtitle="did things" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 3" name="dev 3" subtitle="did things" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 4" name="dev 4" subtitle="did things" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 5" name="dev 5" subtitle="did things" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 6" name="dev 6" subtitle="did things" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 7" name="dev 7" subtitle="did things" clicklink="https://google.com" />
        <Picture src="/not-not-blank.png" alt="Portrait 8" name="dev 8" subtitle="did things" clicklink="https://google.com" />
    </>
);

function PortraitCollection(props: CollenctionNumberProps) {
    return (
        <>
            <div className="align-center">
                <div className="potrait-divs-container">
                    {props.number === 1 && excom}
                    {props.number === 2 && extended_excom}
                    {props.number === 3 && devs}
                </div>
            </div>
        </>
    );
}

export default PortraitCollection;