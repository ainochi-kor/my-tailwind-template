import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    theme: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    theme: "primary",
    size: "large",
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    theme: "primary",
    size: "medium",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    theme: "primary",
    size: "small",
    children: "Button",
  },
};
