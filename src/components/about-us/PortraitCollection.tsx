import Picture from "./Picture";

interface CollenctionNumberProps {
    number: number;
}

const excom = (
    <>
        <Picture src="/about/photos/Abhijith.jpg" alt="Abhijith Seshadri" name="Abhijith Seshadri" subtitle="President" clicklink="https://www.linkedin.com/in/abhijith-seshadri-326a14207/" />
        <Picture src="/about/photos/Parag.jpg" alt="Parag Jiwtani" name="Parag Jiwtani" subtitle="Secretary" clicklink="https://www.linkedin.com/in/parag-jiwtani-00a4a118a/" />
        <Picture src="/about/photos/Abhi.jpg" alt="Abhi Kumar" name="Abhi Kumar" subtitle="Oasis Coordinator" clicklink="https://www.linkedin.com/in/abhi-kumar-1839b9312/" />
        <Picture src="/about/photos/Utkarsh.jpg" alt="Utkarsh Dutta" name="Utkarsh Dutta" subtitle="Apogee Coordinator" clicklink="https://www.linkedin.com/in/utkarsh-dutta-28239625a/" />
    </>
)

const extended_excom = (
    <>
        <Picture src="/about/photos/Neerav.jpg" alt="Neerav Krishna" name="Neerav Krishna" subtitle="Chief Editor" clicklink="https://www.linkedin.com/in/neeravkrishna/" />
        <Picture src="/about/photos/Kunal.jpg" alt="Kunal Verma" name="Kunal Verma" subtitle="Joint Coordinator" clicklink="https://www.linkedin.com/in/keshav-johri-1a79661b7/" />
        <Picture src="/about/photos/Mantra.jpg" alt="Mantra Mehta" name="Mantra Mehta" subtitle="Projects Lead" clicklink="/404" />
    </>
);

const devs = (
    <>
        <Picture src="/about/photos/Aditi.jpg" alt="Aditi Kamal" name="Aditi Kamal" subtitle="Design" clicklink="/404" />
        <Picture src="/about/photos/Anoushka.jpg" alt="Anoushka Vatsa" name="Anoushka Vatsa" subtitle="Design" clicklink="https://www.linkedin.com/in/anoushka-vatsa-410678223/" />
        <Picture src="/about/photos/Kunal.jpg" alt="Kunal Verma" name="Kunal Verma" subtitle="Design" clicklink="https://www.linkedin.com/in/kunal-verma-b3174427a/" />
        <Picture src="/about/photos/Neerav.jpg" alt="Neerav Krishna" name="Neerav Krishna" subtitle="Design" clicklink="https://www.linkedin.com/in/neeravkrishna/" />
        <Picture src="/about/photos/Arnav.jpg" alt="Arnav Garg" name="Arnav Garg" subtitle="Frontend" clicklink="https://www.linkedin.com/in/dorkcubed/" />
        <Picture src="/about/photos/Darshil.jpg" alt="Darshil Chauhan" name="Darshil Chauhan" subtitle="Frontend" clicklink="https://www.linkedin.com/in/darshil-chauhan-7354362b1/" />
        <Picture src="about/photos/Neeharika.jpg" alt="Neeharika Maram" name="Neeharika Maram" subtitle="Frontend" clicklink="https://www.linkedin.com/in/neeharika-maram-636a002a2/" />
        <Picture src="/about/photos/Keshav.jpg" alt="Keshav Johri" name="Keshav Johri" subtitle="Frontend + Design" clicklink="https://www.linkedin.com/in/keshav-johri-1a79661b7/" />
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