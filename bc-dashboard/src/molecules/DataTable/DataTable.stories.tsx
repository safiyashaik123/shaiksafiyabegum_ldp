import type { Meta, StoryObj } from "@storybook/react-webpack5";

import DataTable from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Molecules/DataTable",
  component: DataTable,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays payment information in a tabular format with due date, status, expected amount, and outstanding amount.",
      },
    },
  },

  args: {
    headers: [
      "Due Date",
      "Status",
      "Expected Amount",
      "Outstanding",
    ],

    rows: [
      {
        dueDate: "March 14, 2021",
        days: "Due in 3 days",
        status: "Pending",
        expectedAmount: "$12,000",
        outstanding: "$2,500",
      },
      {
        dueDate: "March 20, 2021",
        days: "Due in 9 days",
        status: "Paid",
        expectedAmount: "$8,000",
        outstanding: "$0",
      },
    ],
  },

  argTypes: {
    headers: {
      control: false,
      description: "Column headers displayed in the payment table.",
    },

    rows: {
      control: false,
      description: "Payment records displayed in the table.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Playground: Story = {};