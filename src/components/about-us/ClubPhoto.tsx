import clubPhoto from '/about/club-photo.jpg';

function ClubPhoto() {
    return (
        <>
            <div className="align-center">
                <div className="club-image-container">
                    <img src={clubPhoto} alt="Club Photo" />
                </div>
            </div>
        </>
    );
}

export default ClubPhoto;