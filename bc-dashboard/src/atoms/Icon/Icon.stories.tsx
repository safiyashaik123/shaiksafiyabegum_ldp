import type { Meta, StoryObj } from "@storybook/react-webpack5";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Icon from "./Icon";

const icons = {
  Home: HomeOutlinedIcon,
  Notification: NotificationsOutlinedIcon,
  Settings: SettingsOutlinedIcon,
  Person: PersonOutlineOutlinedIcon,
};

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable icon wrapper built using Material UI icons. Supports different icon types, sizes and colors.",
      },
    },
  },

  args: {
    icon: HomeOutlinedIcon,
    fontSize: "medium",
    color: "primary",
  },

  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(icons),
      mapping: icons,
      description: "Selects the icon to render.",
    },

    fontSize: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Controls the icon size.",
    },

    color: {
      control: "select",
      options: [
        "inherit",
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "info",
      ],
      description: "Controls the icon color.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Playground: Story = {};