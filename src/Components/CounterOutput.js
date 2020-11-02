import React from 'react';
import {useSelector}from "react-redux";

function CounterOutput() {
    const counter = useSelector((state) => state.counter)
    console.log("COUNTER  >>>> ",counter)
    return (
        <div>
            Counter Value: {counter}
        </div>
    )
}

export default CounterOutput
