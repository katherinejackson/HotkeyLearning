import React, { useState } from "react";

const colours = ['blue', 'green', 'purple', 'orange']

const getClassName = (options) => {
    var className = "my-card "
    if (options.colour_scheme == 'default') {
        className += "default "
    } else {
        const randomIndex = Math.floor(Math.random() * colours.length);
        className += colours[randomIndex] + " "
    }

    return className
}

const Card = ({ display, text, handleClick, value, selected, options }) => {
    const [className] = useState(getClassName(options))

    

    return (
        <button
            className={`${className} ${selected ? 'selected' : ''}`}
            onClick={handleClick}
            value={value}>
            {display ? text : ''}
        </button>
    )

}

export default Card