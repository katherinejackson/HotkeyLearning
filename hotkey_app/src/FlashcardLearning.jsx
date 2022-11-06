import React, { useEffect, useState } from "react";

import Flashcard from "./Flashcard";

const FlashcardLearning = ({ data, selectedData }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    if (selectedData.length == 0) {
        selectedData.push(1, 2, 3)
    }


    const showNextCard = () => {
        if (currentIndex + 1 < selectedData.length) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }

    }

    return (
        selectedData.length > 0
            ? <div className="d-flex align-items-center justify-content-center flex-grow-1 flex-column">
                <Flashcard front={data[selectedData[currentIndex]]['command']} back={data[selectedData[currentIndex]]['windows_key']} />
                <button onClick={showNextCard}>Next</button>
            </div>
            : <p>No Cards to display</p>
    )

}

export default FlashcardLearning