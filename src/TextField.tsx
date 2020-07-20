import React, { useState, useRef } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok: boolean;
  i?: number; // Optional
  fn?: (bob: string) => string;
  person: Person;
}

export const TextField: React.FC<Props> = ({}) => {
  const [count, setCount] = useState<number | null>(5);
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  setCount(12);
  console.log(count);

  return (
    <div ref={divRef}>
      <input ref={inputRef} />
    </div>
  );
};
