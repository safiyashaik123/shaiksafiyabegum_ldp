import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Storybook Addons/Card",
  component: Card,

  tags: ["autodocs"],

  parameters: {
    layout: "centered",

    viewport: {
      defaultViewport: "responsive",
    },
  },

  args: {
    title: "Storybook Card",
    description:
      "Resize this story using the Viewport toolbar to see how it behaves.",
    showFooter: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};