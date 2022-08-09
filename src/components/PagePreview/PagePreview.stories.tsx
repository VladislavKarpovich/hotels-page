import { PagePreview } from "./PagePreview";
import { ComponentMeta } from "@storybook/react";

const info: ComponentMeta<typeof PagePreview> = {
  title: "PagePreview",
  component: PagePreview,
};

export const DefaultView = () => (
  <PagePreview
    imageSrc={require("../../assets/places.webp")}
    title="Title example"
    description="Description"
  />
);

export default info;
