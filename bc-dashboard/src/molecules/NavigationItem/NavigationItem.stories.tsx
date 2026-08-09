import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { expect } from "storybook/test";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { MemoryRouter } from "react-router-dom";

import NavigationItem from "./NavigationItem";

const meta: Meta<typeof NavigationItem> = {
  title: "Molecules/NavigationItem",
  component: NavigationItem,

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
          "Navigation item used in the sidebar. Displays an icon and label, highlights the active route, and navigates using React Router.",
      },
    },
  },

  args: {
    icon: <HomeOutlinedIcon />,
    label: "Home",
    to: "/",
  },

  argTypes: {
    icon: {
      control: false,
      description: "Icon displayed before the navigation label.",
    },
    label: {
      control: "text",
      description: "Text displayed for the navigation item.",
    },
    to: {
      control: "text",
      description: "Route path to navigate to.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavigationItem>;

export const Playground: Story = {
  play: async ({ canvas, userEvent }) => {
    const link = canvas.getByRole("link", {
      name: /home/i,
    });

    await expect(link).toBeInTheDocument();

    await userEvent.click(link);

    await expect(link).toHaveAttribute("href", "/");
  },
};