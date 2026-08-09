import type { Meta, StoryObj } from "@storybook/react-webpack5";

import DueCard from "./DueCard";

const meta: Meta<typeof DueCard> = {
  title: "Molecules/DueCard",
  component: DueCard,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays the next payment due date along with the amount and status badge.",
      },
    },
  },

  args: {
    dueDate: "Due in 30 days",
    amount: "$45,000",
    badge: "Pending",
  },

  argTypes: {
    dueDate: {
      control: "text",
      description: "Payment due date.",
    },
    amount: {
      control: "text",
      description: "Amount due.",
    },
    badge: {
      control: "text",
      description: "Status badge displayed on the card.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DueCard>;

export const Playground: Story = {};