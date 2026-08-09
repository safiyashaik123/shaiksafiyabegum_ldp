import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable typography component built on top of Material UI Typography. Supports multiple variants and text alignment options.",
      },
    },
  },

  args: {
    children: "Seeder Typography",
    variant: "body1",
    align: "left",
  },

  argTypes: {
    children: {
      control: "text",
      description: "Content displayed inside the typography component.",
    },

    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "body1",
        "body2",
        "caption",
      ],
      description: "Specifies the typography variant.",
    },

    align: {
      control: "radio",
      options: ["left", "center", "right", "justify"],
      description: "Specifies the text alignment.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Playground: Story = {
  render: (args) => (
    <div
      style={{
        background: "#19181D",
        padding: "24px",
      }}
    >
      <Typography {...args} />
    </div>
  ),
};