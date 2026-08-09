import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Box from "@mui/material/Box";

import Divider from "./Divider";
import Typography from "../Typography/Typography";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable divider component built on top of MUI Divider. Supports horizontal and vertical orientations with different variants.",
      },
    },
  },

  args: {
    orientation: "horizontal",
    variant: "fullWidth",
    flexItem: false,
  },

  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Specifies the divider orientation.",
    },

    variant: {
      control: "radio",
      options: ["fullWidth", "middle", "inset"],
      description: "Determines the divider variant.",
    },

    flexItem: {
      control: "boolean",
      description: "Makes the divider behave as a flex item.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Playground: Story = {
  render: (args) => {
    const isVertical = args.orientation === "vertical";

    return (
      <Box
        sx={{
          width: isVertical ? 200 : 400,
          height: isVertical ? 120 : "auto",
          display: isVertical ? "flex" : "block",
          alignItems: "center",
          gap: 2,
        }}
      >
        {isVertical ? (
          <>
            <Typography>Left</Typography>

            <Divider {...args} />

            <Typography>Right</Typography>
          </>
        ) : (
          <>
            <Typography>Above Divider</Typography>

            <Divider {...args} sx={{ my: 2 }} />

            <Typography>Below Divider</Typography>
          </>
        )}
      </Box>
    );
  },
};