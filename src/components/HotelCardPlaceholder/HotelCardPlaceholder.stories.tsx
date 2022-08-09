import { HotelCardPlaceholder } from "./HotelCardPlaceholder";
import { ComponentMeta } from "@storybook/react";

const info: ComponentMeta<typeof HotelCardPlaceholder> = {
  title: "HotelCardPlaceholder",
  component: HotelCardPlaceholder,
};

export const DefaultView = () => <HotelCardPlaceholder />;

export default info;
