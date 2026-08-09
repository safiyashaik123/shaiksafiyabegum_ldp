import type { Meta, StoryObj } from "@storybook/react-webpack5";

import CashKickCard from "./CashKickCard";

const meta: Meta<typeof CashKickCard> = {
  title: "Molecules/CashKickCard",
  component: CashKickCard,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays information about launching a new Cash Kick along with the available funding amount.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CashKickCard>;

export const Playground: Story = {};