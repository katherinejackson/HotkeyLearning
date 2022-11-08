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

    return (
        selectedItems.length > 0
            ? <div className="d-flex align-items-center justify-content-center flex-grow-1 flex-column">
                <Flashcard front={data[selectedItems[currentIndex]]['command']} back={data[selectedItems[currentIndex]]['windows_key']} />
                <button onClick={showNextCard}>Next</button>
            </div>
            : <p>No Cards to display</p>
    )

}

export default FlashcardLearning