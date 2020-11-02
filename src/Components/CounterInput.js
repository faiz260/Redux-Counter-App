import React from "react";
import { useDispatch } from "react-redux";
import { incrementAction, decrementAction } from "./Actions/Action";

function CounterInput() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementAction()) }>+</button>
      <button onClick={() =>  dispatch(decrementAction()) }>-</button>
    </div>
  );
}

export default CounterInput;
