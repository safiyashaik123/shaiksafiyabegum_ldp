import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Storybook Addons/Input",
  component: Input,

  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },

  args: {
    label: "Username",
    placeholder: "Enter username",
    value: "",
    type: "text",
    disabled: false,
    required: false,
    ariaLabel: "Username",
  },

  argTypes: {
    label: {
      control: "text",
      description: "Input label",
    },

    placeholder: {
      control: "text",
      description: "Placeholder text",
    },

    value: {
      control: "text",
      description: "Default value",
    },

    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
      description: "Input type",
    },

    disabled: {
      control: "boolean",
    },

    required: {
      control: "boolean",
    },

    ariaLabel: {
      control: "text",
      description: "Accessibility label",
    },

    onChange: {
      action: "changed",
    },

    onFocus: {
      action: "focused",
    },

    onBlur: {
      action: "blurred",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

