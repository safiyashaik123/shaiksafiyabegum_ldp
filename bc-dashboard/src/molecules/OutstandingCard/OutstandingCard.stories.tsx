import type { Meta, StoryObj } from "@storybook/react-webpack5";

import OutstandingCard from "./OutstandingCard";

const meta: Meta<typeof OutstandingCard> = {
  title: "Molecules/OutstandingCard",
  component: OutstandingCard,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays the outstanding amount along with its completion percentage.",
      },
    },
  },

  args: {
    amount: "$170,454",
    progress: 60,
  },

  argTypes: {
    amount: {
      control: "text",
      description: "Outstanding amount.",
    },
    progress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
      description: "Progress percentage.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof OutstandingCard>;

export const Playground: Story = {};