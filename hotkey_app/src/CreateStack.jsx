import React, { useState } from "react";
import Card from "./Card";
import { onClick } from "./studyEventHandlers";

const CreateStack = ({ data, options }) => {
    const [selectedData, setSelectedData] = useState([])

    const handleClick = (event) => {
        const command = parseInt(event.target.value)

        const index = selectedData.indexOf(command)
        if (index < 0) {
            setSelectedData(prev => [...prev, command])
        } else {
            selectedData.splice(index, 1)
            setSelectedData(prev => [...prev])
        }
    }

    const handleNext = () => {
        onClick(selectedData)
    }


    return (
        <div>
            <p>Please add all the commands you would like to learn</p>
            <button onClick={handleNext}>Next</button>
            <div className="grid">
                {data.map((command, index) => (
                    <Card
                        display={true}
                        handleClick={handleClick}
                        text={command['command']}
                        selected={selectedData.includes(index)}
                        value={index}
                        options={options}
                    />

                ))}
            </div>
            
        </div>

    )

}

export default CreateStack