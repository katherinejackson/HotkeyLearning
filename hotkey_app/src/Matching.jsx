import React, { useEffect, useState } from "react";
import useTimer from 'easytimer-react-hook';

import MatchingCard from "./MatchingCard";

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

const getLists = (selectedItems, data) => {
    const commands = {}
    const keys = {}

    selectedItems.map(i => {
        const row = data[i]
        commands[i] = row['command']
        keys[i] = row['windows_key']
    })

    return [commands, keys]
}

const Matching = ({ data }) => {
    const selectedItems = parseItems(options.selectedItems)
    const [c, k] = getLists(selectedItems, data)
    const [commands, setCommands] = useState(c)
    const [keys, setKeys] = useState(k)
    const [selected, setSelected] = useState(null)
    const [finishTime, setFinishTime] = useState(null)

    const [timer, ] = useTimer();
    timer.start();

    const handleClick = (item) => {

        item = item.target.value
        if (selected == null) {
            setSelected(item)
        } else {
            if (selected == item) {
                delete commands[item]
                setCommands(commands)


                delete keys[item]
                setKeys(keys)
                
            } else {
                console.log('wrong wrong')
            }

            setSelected(null)
        }

        if (Object.keys(commands).length == 0) {
            setFinishTime(timer.getTimeValues().toString())
            timer.stop()
            
        }
    }

    const handleRestart = () => {
        setCommands(c)
        setKeys(k)
        timer.reset()
        setFinishTime(null)
    }

    return (
        <div className="">
            {finishTime ? finishTime : timer.getTimeValues().toString()}
            {Object.keys(commands).map((c, index) => (
                <MatchingCard text={commands[c]} value={c} handleClick={handleClick} />
            ))}

            {Object.keys(keys).map((k, index) => (
                <MatchingCard text={keys[k]} value={k} handleClick={handleClick} />
            ))}
            
            <button onClick={handleRestart}>Restart</button>
        </div>

    )

}

export default Matching