import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Storybook Addons/Typography",
  component: Typography,

  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },

  args: {
    text: "Welcome to Storybook",
    variant: "body",
    color: "primary",
    textColor: "#000000",
  },

  argTypes: {
    text: {
      control: "text",
      description: "Typography text",
    },

    variant: {
      control: "select",
      options: ["h1", "h2", "body", "caption"],
    },

    color: {
      control: "select",
      options: ["primary", "secondary", "success", "danger"],
    },

    textColor: {
      description: "Custom text color (Color Picker from matcher)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};