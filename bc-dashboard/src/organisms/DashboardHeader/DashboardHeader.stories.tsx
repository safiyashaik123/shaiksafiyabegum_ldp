import type { Meta, StoryObj } from "@storybook/react-webpack5";

import DashboardHeader from "./DashboardHeader";

const meta: Meta<typeof DashboardHeader> = {
  title: "Organisms/DashboardHeader",
  component: DashboardHeader,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays the dashboard summary section using Due Card, Outstanding Card, and Cash Kick Card.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DashboardHeader>;

export const Playground: Story = {};