import React from 'react'

function CounterOutput(props) {
    console.log("Output",props)
    return (
        <div>
            Counter Value: {props.counter}
        </div>
    )
}

export default CounterOutput
