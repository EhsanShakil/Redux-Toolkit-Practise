import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, updateCounter } from "../store/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => {
    console.log(state);
    return state.counter.count;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(updateCounter());
        }}
      >
        Increment From Server
      </button>
    </div>
  );
};

export default Counter;
