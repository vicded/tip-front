import React from "react";

const RadioGrid = () => {
    return (
        <div>
            <input type="radio" name="tip" value=".005"/>5% 
            <input type="radio" name="tip" value=".01"/>10%
            <input type="radio" name="tip" value=".015"/>15%
            <input type="radio" name="tip" value=".25"/>25%
            <input type="radio" name="tip" value=".5"/>50%
        </div>
    )
}

export default RadioGrid