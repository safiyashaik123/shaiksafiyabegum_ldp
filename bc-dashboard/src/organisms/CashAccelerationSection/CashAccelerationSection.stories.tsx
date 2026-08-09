import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { expect, fn } from "storybook/test";

import CashAccelerationSection from "./CashAccelerationSection";

const meta: Meta<typeof CashAccelerationSection> = {
  title: "Organisms/CashAccelerationSection",
  component: CashAccelerationSection,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays payment or contract information based on the selected tab.",
      },
    },
  },

  args: {
    activeTab: "payments",

    onTabChange: fn(),

    paymentHeaders: [
  "Due date",
  "Status",
  "Expected amount",
  "Outstanding",
],

paymentRows: [
  {
    dueDate: "Mar 03, 2021",
    days: "31 day(s) from now",
    status: "Upcoming",
    expectedAmount: "-$14,204.55",
    outstanding: "$156,250.05",
  },
  {
      dueDate: "Jun 03, 2021",
      days: "62 day(s) from now",
      status: "Upcoming",
      expectedAmount: "-$14,204.55",
      outstanding: "$142,045.50",
    },
],

    contractHeaders: [
  "Name",
  "Type",
  "Per payment",
  "Term length",
  "Payment amount",
],

contractRows: [
  {
    name: "Contract 1",
    type: "Monthly",
    perPayment: "$12,000.25",
    termLength: "12 months",
    fee: "12.0% fee",
    paymentAmount: "$126,722.64",
  },
  {
    name: "Contract 2",
    type: "Monthly",
    perPayment: "$6,000.00",
    termLength: "12 months",
    fee: "12.0% fee",
    paymentAmount: "$63,380.00",
  },
],
  },

  argTypes: {
    activeTab: {
      control: "radio",
      options: ["payments", "contracts"],
      description: "Currently selected tab.",
    },

    onTabChange: {
      control: false,
      description:
        "Callback fired when the active tab changes.",
    },

    paymentHeaders: {
      control: false,
      description: "Headers for the payments table.",
    },

    paymentRows: {
      control: false,
      description: "Rows displayed in the payments table.",
    },

    contractHeaders: {
      control: false,
      description: "Headers for the contracts table.",
    },

    contractRows: {
      control: false,
      description: "Rows displayed in the contracts table.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CashAccelerationSection>;

export const Playground: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const contractsButton = canvas.getByRole("button", {
      name: /contracts/i,
    });

    await userEvent.click(contractsButton);

    await expect(args.onTabChange).toHaveBeenCalledWith(
      "contracts"
    );
  },
};