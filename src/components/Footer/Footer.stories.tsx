import { Footer } from "./Footer";
import { ComponentMeta } from "@storybook/react";

const info: ComponentMeta<typeof Footer> = {
  title: "Footer",
  component: Footer,
};

export const DefaultView = () => (
  <Footer
    title="Footer title"
    description="Footer description. Some text here... "
    copyright="Copyright bla bla bla"
  />
);

export default info;
