import React, { useEffect, useState } from "react";

import Flashcard from "./Flashcard";

const options = window.options || { selectedItems: '([1, 2, 3, 45,])' }

const parseItems = (items) => {
    items = items.replace("(", '')
    items = items.replace(")", '')
    items = items.replace("[", '')
    items = items.replace("]", '')

    items = items.split(",").map(Number)

    // items.forEach(i => parseInt(i))
    // TODO this is stupid and broken

    return items
}

const FlashcardLearning = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const selectedItems = parseItems(options.selectedItems)

    const showNextCard = () => {
        if (currentIndex + 1 < selectedItems.length) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }

    }

    const showPrevCard = () => {
        if (currentIndex - 1 > 0) {
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(selectedItems.length - 1)
        }

    }

    return (
        selectedItems.length > 0
            ? <div>
                <p className="d-flex justify-content-end">{`${currentIndex + 1} / ${selectedItems.length}`}</p>
                <Flashcard front={data[selectedItems[currentIndex]]['command']} back={data[selectedItems[currentIndex]]['windows_key']} />
                <div className="flashcard-buttons">
                    <button onClick={showPrevCard}>‹</button>
                    <button onClick={showNextCard}>›</button>
                </div>

            </div>
            : <p>No Cards to display</p>
    )

}

export default FlashcardLearning