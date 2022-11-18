import React, { useState } from "react";

import Matching from "./Matching";

const parseItems = (items) => {
    items = items.replace("(", '')
    items = items.replace(")", '')
    items = items.replace("[", '')
    items = items.replace("]", '')
    items = items.replaceAll("'", '')

    items = items.split(",").map(Number)

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

const Game = ({ data, options }) => {
    options['selectedItems'] = window?.localStorage?.selected_items || "([0,1,2])"
    console.log(options)
    const [selectedItems, setSelectedItems] = useState(parseItems(options.selectedItems))
    const [cards, setCards] = useState(shuffleCards(getCards(selectedItems, data)))
    const [started, setStarted] = useState(false)
    const [highScore, setHighScore] = useState(null)
    const [gameNumber, setGameNumber] = useState(1)

    const resetStack = () => {
        setCards(shuffleCards(getCards(selectedItems, data)))
    }

    const startGame = () => {
        setStarted(true)
    }

    return (
        <div>
            {started
                ? <Matching
                    cards={cards}
                    gameNumber={gameNumber}
                    highScore={highScore}
                    key={gameNumber}
                    options={options}
                    resetStack={resetStack}
                    selectedItems={selectedItems}
                    setGameNumber={setGameNumber}
                    setHighScore={setHighScore}
                />
                : <button onClick={startGame}>Start Game</button>}
        </div>

    )

}

export default Game