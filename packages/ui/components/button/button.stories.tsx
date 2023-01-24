import { ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from "./button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template = (args: ButtonProps) => <Button {...args}>Hi</Button>;

export const Default = Template.bind({});
