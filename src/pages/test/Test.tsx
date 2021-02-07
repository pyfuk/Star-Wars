import React from "react";

interface TestProps {
  test_array: Array<string>;
  onAddItem: () => void;
}

const Test = ({ test_array, onAddItem }: TestProps): React.ReactElement => {
  return (
    <section>
      <ul>
        {test_array.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button onClick={onAddItem}> Add</button>
    </section>
  );
};

export default Test;
