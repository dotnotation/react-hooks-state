import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    // using a callback function so that the current state is passed instead of calling it async.
    // if you didn't use a callback, the count would only increase by 1, not 2 so effectively only one setCount would be read
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
