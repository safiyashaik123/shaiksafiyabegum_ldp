import type { ReactNode } from "react";

type CardProps = {
  title: string;
  action: ReactNode; // JSX Prop
  children: ReactNode; // Children Prop
};

function Card({ title, action, children }: CardProps) {
  return (
    <>
      <h2>{title}</h2>

      <h3>JSX Prop</h3>
      {action}

      <h3>Children Prop</h3>
      {children}

      <hr />
    </>
  );
}

export default Card;