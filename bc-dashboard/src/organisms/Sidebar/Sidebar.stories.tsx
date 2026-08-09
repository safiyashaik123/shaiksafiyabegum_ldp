import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { MemoryRouter } from "react-router-dom";
import { expect } from "storybook/test";

import Sidebar from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Organisms/Sidebar",
  component: Sidebar,

  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],

  parameters: {
    docs: {
      description: {
        component:
          "Displays the application sidebar with branding and navigation links.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Playground: Story = {
  play: async ({ canvas, userEvent }) => {
    const cashAcceleration = canvas.getByRole("link", {
      name: /cash acceleration/i,
    });

    await userEvent.click(cashAcceleration);

    await expect(cashAcceleration).toHaveAttribute(
      "href",
      "/cash-acceleration"
    );
  },
};