import React, { useEffect, useState } from "react";

const CheckFlashCard = ({ command, handleClick, index}) => {


    return (
        <div className="d-flex">
            <input onClick={handleClick} type="checkbox" id={index} name={command} value={command} />
            <label for={command}>{command}</label>
        </div>

    )

}

export default CheckFlashCard