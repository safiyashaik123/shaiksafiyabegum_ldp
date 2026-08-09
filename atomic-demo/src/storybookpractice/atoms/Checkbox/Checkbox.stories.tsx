import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "storybook/test";

import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Storybook Addons/Checkbox",
  component: Checkbox,

  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },

  args: {
    label: "Accept Terms & Conditions",
    checked: false,
    disabled: false,
    onChange: fn(),
  },

  argTypes: {
    label: {
      control: "text",
    },

    checked: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    onChange: {
      action: "checkbox-changed",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const InteractionTest: Story = {
  args: {
    label: "Accept Terms & Conditions",
    checked: false,
    onChange: fn(),
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox");

    // Initially unchecked
    await expect(checkbox).not.toBeChecked();

    // Click checkbox
    await userEvent.click(checkbox);

    // Verify it is checked
    await expect(checkbox).toBeChecked();

    // Verify callback was triggered
    await expect(args.onChange).toHaveBeenCalled();

    console.log("Checkbox interaction test passed");
  },
};