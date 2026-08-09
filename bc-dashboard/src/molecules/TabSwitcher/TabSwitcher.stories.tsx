import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { expect, fn } from "storybook/test";

import TabSwitcher from "./TabSwitcher";

const meta: Meta<typeof TabSwitcher> = {
  title: "Molecules/TabSwitcher",
  component: TabSwitcher,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Allows users to switch between Payments and Contracts tabs.",
      },
    },
  },

  args: {
    activeTab: "payments",
    onTabChange: fn(),
  },

  argTypes: {
    activeTab: {
      control: "radio",
      options: ["payments", "contracts"],
      description: "Currently selected tab.",
    },
    onTabChange: {
        control :false,
      description: "Triggered when a tab is selected.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TabSwitcher>;

export const Playground: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const contractsButton = canvas.getByRole("button", {
      name: /contracts/i,
    });

    await userEvent.click(contractsButton);

    await expect(args.onTabChange).toHaveBeenCalledWith("contracts");
  },
};