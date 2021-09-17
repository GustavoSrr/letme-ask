import { useState } from "react";

type buttonProps = {
  children?: string;
};
export function Button(props: buttonProps) {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter(counter + 1);
  }

  return <button onClick={add}>{counter}</button>;
}
