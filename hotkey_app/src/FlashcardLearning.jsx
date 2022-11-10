import React, { useState } from "react";

const colours = ['blue', 'green', 'purple', 'orange']

const parseItems = (items) => {
    items = items.replace("(", '')
    items = items.replace(")", '')
    items = items.replace("[", '')
    items = items.replace("]", '')
    items = items.replaceAll("'", '')

    items = items.split(",").map(Number)

    return items
}


const getColour = (options) => {
    if (options.colour_scheme == 'default') {
        return "default"
    } else {
        const randomIndex = Math.floor(Math.random() * colours.length);
        return colours[randomIndex]
    }
}

const FlashcardLearning = ({ data, options }) => {
    options['selectedItems'] = window?.localStorage?.selected_items || "([0,1,2])"
    console.log(options)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedItems] = useState(parseItems(options.selectedItems))
    const [colour, setColour] = useState(getColour(options))
    const [showFront, setShowFront] = useState(true);

    const handleCardClick = () => {
        setShowFront(!showFront)
    }

    const showNextCard = () => {
        if (currentIndex + 1 < selectedItems.length) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }

        setColour(getColour(options))
        setShowFront(true)
    }

    const showPrevCard = () => {
        if (currentIndex - 1 > 0) {
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(selectedItems.length - 1)
        }

        setColour(getColour(options))
        setShowFront(true)
    }

    return (
        selectedItems.length > 0
            ? <div>
                <p className="d-flex justify-content-end">{`${currentIndex + 1} / ${selectedItems.length}`}</p>
                <div className={`flashcard ${colour}`} onClick={handleCardClick}>
                    {showFront ? <p>{data[selectedItems[currentIndex]]['command']}</p> : <p>{data[selectedItems[currentIndex]]['windows_key']}</p>}

                </div>
                <div className="flashcard-buttons">
                    <button onClick={showPrevCard}>‹</button>
                    <button onClick={showNextCard}>›</button>
                </div>

            </div>
            : <p>No Cards to display</p>
    )

}

export default FlashcardLearning