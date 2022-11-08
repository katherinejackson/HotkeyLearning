import React, { useEffect, useState } from "react";

const Flashcard = ({ front, back }) => {
    const [showFront, setShowFront] = useState(true);

    const handleCardClick = () => {
        setShowFront(!showFront)
    }


    return (
        <div className="align-items-center justify-content-center bg-primary d-flex p-5 w-75" onClick={handleCardClick}>
            {showFront ? <p>{front}</p> : <p>{back}</p>}

        </div>
    )

}

export default Flashcard