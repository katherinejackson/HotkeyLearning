import React, { useEffect, useState } from "react";
import CheckFlashCard from "./CheckFlashCard";

const MatchingCard = ({ display, text, handleClick, value, selected }) => {

    return (
        <button
            className={`matchingcard ${selected == true ? 'selected' : ''}`}
            onClick={handleClick}
            value={value}>
            {display ? text : ''}
        </button>
    )

}

export default MatchingCard