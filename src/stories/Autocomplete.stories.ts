import type { Meta, StoryObj } from "@storybook/react";
import Autocomplete from "../components/Autocomplete";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Autocomplete> = {
  title: "Example/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Primary: Story = {
  args: {
    inputValue: "auto complete",
    label: "label",
    options: ["1", "2", "3", "4", "5"],
    updateInputValue(selectedItem) {
      return selectedItem;
    },
  },
};
