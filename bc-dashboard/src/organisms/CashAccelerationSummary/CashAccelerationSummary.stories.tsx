import type { Meta, StoryObj } from "@storybook/react-webpack5";

import CashAccelerationSummary from "./CashAccelerationSummary";

const meta: Meta<typeof CashAccelerationSummary> = {
  title: "Organisms/CashAccelerationSummary",
  component: CashAccelerationSummary,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays the cash acceleration summary information alongside the Cash Kick card.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CashAccelerationSummary>;

export const Playground: Story = {};