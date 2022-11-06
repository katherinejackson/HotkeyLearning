import React, { useEffect, useState } from "react";
import CheckFlashCard from "./CheckFlashCard";

const CreateStack = ({ data, selectedData }) => {

    const handleClick = (event) => {
        if (event.target.checked) {
            selectedData.push(parseInt(event.target.id))
        } else {
            const index = selectedData.indexOf(parseInt(event.target.id))
            
            if (index != -1) {
                selectedData.splice(index, 1)
            }
        }
    }

    return (
        <div className="">
            <p>Please add all the commands you would like to learn</p>
            {data.map((command, index) => (
                <CheckFlashCard handleClick={handleClick} command={command['command']} index={index} />
            ))}

        </div>

    )

}

export default CreateStack