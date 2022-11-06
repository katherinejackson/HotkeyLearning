import React, { useEffect, useState } from "react";
import CheckFlashCard from "./CheckFlashCard";

const Matching = ({data}) => {

    return (
        <div className="">
            <p>Please add all the commands you would like to learn</p>
            {data.map((command, index) => (
                <CheckFlashCard command={command['command']}/>
            ))}

        </div>
        
    )

}

export default Matching