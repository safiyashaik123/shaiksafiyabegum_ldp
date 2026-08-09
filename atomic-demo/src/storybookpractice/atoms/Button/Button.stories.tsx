import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "storybook/test";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Storybook Addons/Button",
  component: Button,

  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },

  args: {
    label: "Click Me",
    variant: "primary",
    size: "medium",
    disabled: false,
    rounded: false,
    onClick: fn(),
  },

  argTypes: {
    label: {
      control: "text",
      description: "Text displayed inside the button",
    },

    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
      description: "Button style",
    },

    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Button size",
    },

    disabled: {
      control: "boolean",
      description: "Disable the button",
    },

    rounded: {
      control: "boolean",
      description: "Rounded button corners",
    },

    onClick: {
      action: "button-clicked",
      description: "Triggered when the button is clicked",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const InteractionTest: Story = {
  args: {
    label: "Click Me",
    onClick: fn(),
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button");

    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalled();

    console.log("Button interaction test passed");
  },
};