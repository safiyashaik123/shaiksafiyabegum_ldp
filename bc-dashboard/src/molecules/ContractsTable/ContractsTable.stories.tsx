import type { Meta, StoryObj } from "@storybook/react-webpack5";

import ContractsTable from "./ContractsTable";

const meta: Meta<typeof ContractsTable> = {
  title: "Molecules/ContractsTable",
  component: ContractsTable,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays contract details including contract type, payment frequency, term length, fee, and payment amount.",
      },
    },
  },

  args: {
    headers: [
      "Name",
      "Type",
      "Per Payment",
      "Term Length",
      "Payment Amount",
    ],

    rows: [
      {
        name: "Sales Contract",
        type: "Monthly",
        perPayment: "$1,500",
        termLength: "12 Months",
        fee: "5% Fee",
        paymentAmount: "$18,000",
      },
      {
        name: "Marketing Contract",
        type: "Quarterly",
        perPayment: "$3,000",
        termLength: "6 Months",
        fee: "3% Fee",
        paymentAmount: "$18,000",
      },
    ],
  },

  argTypes: {
    headers: {
      control: false,
      description: "Column headers displayed in the contracts table.",
    },

    rows: {
      control: false,
      description: "Contract records displayed in the table.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContractsTable>;

export const Playground: Story = {};