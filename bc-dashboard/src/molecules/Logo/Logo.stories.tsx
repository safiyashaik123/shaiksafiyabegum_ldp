import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Molecules/Logo",
  component: Logo,

  tags: ["autodocs"],
   decorators: [
    (Story) => (
      <div
        style={{
          background: "#201F24",
          padding: "16px",
        }}
      >
        <Story />
      </div>
    ),
  ],


  parameters: {
    docs: {
      description: {
        component:
          "Displays the Seeder brand logo consisting of the application icon and title. It is primarily used in the application sidebar.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Playground: Story = {};