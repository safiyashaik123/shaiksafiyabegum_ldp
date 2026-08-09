import type { Meta, StoryObj } from "@storybook/react-webpack5";

import StatusChip from "./StatusChip";

const meta: Meta<typeof StatusChip> = {
  title: "Atoms/StatusChip",
  component: StatusChip,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays the current payment status using predefined labels such as Pending, Paid and Upcoming.",
      },
    },
  },

  args: {
    label: "Pending",
  },

  argTypes: {
    label: {
      control: "radio",
      options: ["Pending", "Paid", "Upcoming"],
      description: "Determines the status displayed by the chip.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof StatusChip>;

export const Playground: Story = {};