import React from "react";



const InputDisplay = (props) =>{
    const {heading, logo} = props

    return (
        <>
            <h4>{heading}</h4>
            <div className="display">
                <img src={logo} alt="" />
                <input type="text" placeholder="0"/>
            </div>
        </>
    )
}

export default InputDisplay;