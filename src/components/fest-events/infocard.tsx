import "../../pages/fest-events.css"

interface InfoCardProps {
    Class: string;
    Name: string;
    Text: string;
}

function InfoCard(props: InfoCardProps) {
    return (
        <div className={`infocard ${props.Class}`} >
            <p className="event-name">{props.Name}</p>
            <p className="event-text">{props.Text}</p>
        </div>
    );
}

export default InfoCard;