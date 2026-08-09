import type { Meta, StoryObj } from "@storybook/react-webpack5";

import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import SummaryInfoCard from "./SummaryInfoCard";

const meta: Meta<typeof SummaryInfoCard> = {
  title: "Molecules/SummaryInfoCard",
  component: SummaryInfoCard,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays summary information using icon, title, and value pairs in a responsive card layout.",
      },
    },
  },

  args: {
    items: [
      {
        icon: <ReceiptLongOutlinedIcon color="primary" />,
        title: "Term",
        value: "12 Months",
      },
      {
        icon: <PaidOutlinedIcon color="primary" />,
        title: "Selected Contracts",
        value: "12",
      },
      {
        icon: <AccountBalanceWalletOutlinedIcon color="primary" />,
        title: "Pay Back Amount",
        value: "$170,454",
      },
    ],
  },

  argTypes: {
    items: {
      control: false,
      description:
        "Collection of summary items containing an icon, title and value.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SummaryInfoCard>;

export const Playground: Story = {};