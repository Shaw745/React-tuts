import React from "react";
import { useRef, useEffect } from "react";
// useRef can hold a mutable value that does not cause re-renders when updated
// target DOM elements directly without causing re-renders

const Simpleref = () => {
  const headingContainer = useRef(null);
  console.log(headingContainer.current); // null
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
  const inputRef = useRef(null);

  useEffect(() => {

    // focus the input field when the component mounts
    inputRef.current.focus();
 
  }, []);
  return (
    <div className="container">
      <h1 ref={headingContainer} className="text-3xl text-center">
        useRef
      </h1>
      <form className="myform">
        <label htmlFor="sub"> Subscribe to Our Newsletter</label>
        <input
          ref={inputRef}
          type="email"
          className="input"
          placeholder="Enter your email"
        />
        <button className="mybtn mt-1">Subscribe</button>
      </form>
    </div>
  );
};

export default Simpleref;
