import type { Meta, StoryObj } from "@storybook/react";
import BasicRating from "../components/BasicRating";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BasicRating> = {
  title: "Example/BasicRating",
  component: BasicRating,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BasicRating>;

export const Primary: Story = {
  args: {},
};
