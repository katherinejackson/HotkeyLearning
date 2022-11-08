import React, { useEffect, useState } from "react";
import CheckFlashCard from "./CheckFlashCard";

const MatchingCard = ({ text, handleClick, value }) => {

    return (
        // <div onClick={handleClick} className="" >
        <button onClick={handleClick} value={value}>{text}</button>
        // </div>

    )

}

export default MatchingCard