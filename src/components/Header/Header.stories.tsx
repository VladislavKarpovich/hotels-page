import { useState } from "react";
import { Header } from "./Header";
import { ComponentMeta } from "@storybook/react";

const info: ComponentMeta<typeof Header> = {
  title: "Header",
  component: Header,
};

export const DefaultView = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [adultsAmount, setAdultsAmount] = useState<number>(0);
  const [childrenAmount, setChildrenAmount] = useState<number>(0);

  return (
    <Header
      title="Header"
      rating={rating}
      adultsAmount={adultsAmount}
      childrenAmount={childrenAmount}
      onRatingChange={setRating}
      onChildrenAmountChange={setChildrenAmount}
      onAdultsAmountChange={setAdultsAmount}
    />
  );
};

export default info;
