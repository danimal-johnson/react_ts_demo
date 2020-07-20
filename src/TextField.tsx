import React from "react";

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

  setCount(12);

  return (
    <div>
      <input />
    </div>
  );
};
