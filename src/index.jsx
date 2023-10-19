import React from 'react';

export function Component() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Currently, the count is {count}</p>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
