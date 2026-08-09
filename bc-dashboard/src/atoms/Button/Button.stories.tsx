import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn, expect, userEvent, within } from "storybook/test";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
   tags: ["autodocs"],

  args: {
    children: "New Cash Kick",
    onClick: fn(),
    disabled: false,
    fullWidth: false,
  },

  argTypes: {
    children: {
      control: "text",
    },

    disabled: {
      control: "boolean",
    },

    fullWidth: {
      control: "boolean",
    },

    onClick: {
      action: "Button Clicked",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Playground: Story = {
  play: async ({ canvas, userEvent, args }) => {
  const button = canvas.getByRole("button", {
    name: /new cash kick/i,
  });

  await expect(button).toBeInTheDocument();

  await userEvent.click(button);

  await expect(args.onClick).toHaveBeenCalled();
},
};

//export const Playground: Story = {
  // play: async ({ canvasElement, args }) => {
  //   const canvas = within(canvasElement);

  //   const button = canvas.getByRole("button", {
  //     name: "New Cash Kick",
  //   });

  //   await expect(button).toBeInTheDocument();

  //   await userEvent.click(button);
    
  //   await expect(args.onClick).toHaveBeenCalled();
  // },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   const button = canvas.getByRole("button", {
  //     name: "New Cash Kick",
  //   });

  //   await expect(button).toBeInTheDocument();
  // },
//};