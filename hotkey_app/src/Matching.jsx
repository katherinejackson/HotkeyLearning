import React, { useState } from "react";
import useTimer from 'easytimer-react-hook';

import Card from "./Card";
import { onFinishGame, onReplayClick } from "./studyEventHandlers";

const Matching = ({
    cards,
    gameNumber,
    highScore,
    options,
    resetStack,
    selectedItems, 
    setGameNumber,
    setHighScore
}) => {
    const [clearedCards, setClearedCards] = useState([])
    const [selected, setSelected] = useState(null)
    const [finishTime, setFinishTime] = useState(null)

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
            }
            setSelected(null)
        }

        if (clearedCards.length == selectedItems.length) {
            setFinishTime(timer.getTimeValues().toString())

            if (!highScore || timer.getTimeValues().toString() < highScore) {
                setHighScore(timer.getTimeValues().toString())
                onFinishGame(timer.getTimeValues().toString())
            } else {
                onFinishGame(highScore)
            }

            timer.stop()
        }
    }

    const handleRestart = () => {
        setClearedCards([])
        setGameNumber(gameNumber + 1)
        resetStack()
        timer.reset()
        setFinishTime(null)
        onReplayClick()
    }

    const isSelected = (item) => {
        return selected && item['index'] == selected['index'] && item['type'] == selected['type']
    }

    return (
        <div>
            <div className="flex">
                <p>{highScore ? `High Score: ${highScore}` : null}</p>
                <p>{finishTime ? `Finished Time: ${finishTime}` : `Current time: ${timer.getTimeValues().toString()}`}</p>
            </div>

            <button onClick={handleRestart}>Restart</button>

            <div className="grid" >
                {cards.map(c => (
                    <Card
                        display={c['display']}
                        handleClick={handleClick}
                        key={gameNumber + '-' + c['text']}
                        options={options}
                        selected={isSelected(c)}
                        text={c['text']}
                        value={[c['index'], c['text'], c['type']]}
                    />

                ))}
            </div>
        </div>

    )

}

export default Matching