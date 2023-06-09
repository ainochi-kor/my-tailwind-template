import type { Meta, StoryObj } from "@storybook/react";
import MonthlyCalendar from "../components/Calendar";

const meta: Meta<typeof MonthlyCalendar> = {
  title: "Example/MonthlyCalendar",
  component: MonthlyCalendar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MonthlyCalendar>;

export const Primary: Story = {
  args: {},
};
