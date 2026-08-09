import type { Meta, StoryObj } from "@storybook/react-webpack5";

import PaymentsSection from "./PaymentsSection";

const meta: Meta<typeof PaymentsSection> = {
  title: "Organisms/PaymentsSection",
  component: PaymentsSection,

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
          "Displays the payments section with a heading, View All button, and payment data table.",
      },
    },
  },

  args: {
  headers: [
    "Due date",
    "Status",
    "Expected amount",
    "Outstanding",
  ],

  rows: [
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
},

  argTypes: {
    headers: {
      control: false,
      description: "Column headers displayed in the payment table.",
    },

    rows: {
      control: false,
      description: "Collection of payment records displayed in the table.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PaymentsSection>;

export const Playground: Story = {};