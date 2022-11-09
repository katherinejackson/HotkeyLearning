import React, { useEffect, useState } from "react";

import Matching from "./Matching";

const options = window.options || { selectedItems: '([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 45,])', colour_scheme: 'colour' }

const parseItems = (items) => {
    items = items.replace("(", '')
    items = items.replace(")", '')
    items = items.replace("[", '')
    items = items.replace("]", '')

    items = items.split(",").map(Number)

    // items.forEach(i => parseInt(i))
    // TODO this is stupid and broken

    items.pop()

    return items
}

const getCards = (selectedItems, data) => {
    const cards = []

    selectedItems.map(i => {
        const row = data[i]
        cards.push({ text: row['command'], type: 'command', index: i, display: true })
        cards.push({ text: row['windows_key'], type: 'key', index: i, display: true })
    })

    return cards

}

const shuffleCards = (array) => {
    const length = array.length;
    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

const Game = ({ data }) => {
    const [selectedItems, setSelectedItems] = useState(parseItems(options.selectedItems))
    const [cards, setCards] = useState(shuffleCards(getCards(selectedItems, data)))

    const resetStack = () => {
        setCards(shuffleCards(getCards(selectedItems, data)))
    }

    return (
        <div>
            <Matching selectedItems={selectedItems} cards={cards} resetStack={resetStack} />
        </div>

    )

}

export default Game