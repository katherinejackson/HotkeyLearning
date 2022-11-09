import React, { useState } from "react";
import useTimer from 'easytimer-react-hook';


import Card from "./Card";

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

    console.log('here')

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

const Matching = ({ selectedItems, cards, resetStack, options }) => {
    const [clearedCards, setClearedCards] = useState([])
    const [selected, setSelected] = useState(null)
    const [finishTime, setFinishTime] = useState(null)
    const [displayText, setDisplayText] = useState('')

    const [timer,] = useTimer();
    timer.start();


    const handleClick = (item) => {
        item = item.target.value.split(",")
        item = { index: item[0], text: item[1], type: item[2] }

        if (selected == null) {
            setSelected(item)
        } else {
            if (selected['index'] == item['index'] && selected['type'] !== item['type']) {

                cards.forEach(card => {
                    if (card['index'] == item['index']) {
                        card['display'] = false
                    }
                })

                clearedCards.push(item['index'])

                setDisplayText('Correct!')

            } else {
                setDisplayText('Incorrect!')
            }

            setSelected(null)
        }

        if (clearedCards.length == selectedItems.length) {
            setFinishTime(timer.getTimeValues().toString())
            timer.stop()
            setDisplayText('Completed!')
        }
    }

    const handleRestart = () => {
        resetStack()
        timer.reset()
        setFinishTime(null)
    }

    const isSelected = (item) => {
        return selected && item['index'] == selected['index'] && item['type'] == selected['type']
    }

    return (
        <div>
            {finishTime ? finishTime : timer.getTimeValues().toString()}
            <button onClick={handleRestart}>Restart</button>
            <p>{displayText}</p>

            <div className="grid" >
                {cards.map(c => (
                    <Card
                        text={c['text']}
                        value={[c['index'], c['text'], c['type']]}
                        handleClick={handleClick}
                        selected={isSelected(c)}
                        display={c['display']} 
                        options={options}
                        />

                ))}
            </div>
        </div>

    )

}

export default Matching