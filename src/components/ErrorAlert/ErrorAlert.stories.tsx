import { ErrorAlert } from "./ErrorAlert";
import { ComponentMeta } from "@storybook/react";

const info: ComponentMeta<typeof ErrorAlert> = {
  title: "ErrorAlert",
  component: ErrorAlert,
};

export const DefaultView = () => <ErrorAlert />;

export default info;
