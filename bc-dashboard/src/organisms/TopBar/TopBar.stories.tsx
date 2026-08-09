// import type { Meta, StoryObj } from "@storybook/react-webpack5";
// import { expect, fn } from "storybook/test";

// import TopBar from "./TopBar";

// const meta: Meta<typeof TopBar> = {
//   title: "Organisms/TopBar",
//   component: TopBar,

//   tags: ["autodocs"],

//   decorators: [
//     (Story) => (
//       <div
//         style={{
//           background: "#201F24",
//           padding: "16px",
//         }}
//       >
//         <Story />
//       </div>
//     ),
//   ],

//   parameters: {
//     docs: {
//       description: {
//         component:
//           "Displays the application header with greeting, notification icon, and user profile menu.",
//       },
//     },
//   },

//   args: {
//     onLogout: fn(),
//   },

//   argTypes: {
//     onLogout: {
//       control: false,
//       description: "Callback fired when the user logs out.",
//     },
//   },
// };

// export default meta;

// type Story = StoryObj<typeof TopBar>;

// export const Playground: Story = {
//   play: async ({ canvas, userEvent, args }) => {
//     const profileMenu = canvas.getByLabelText(/profile menu/i);

//     await userEvent.click(profileMenu);

//     const logout = await canvas.findByText(/log out/i);

//     await userEvent.click(logout);

//     await expect(args.onLogout).toHaveBeenCalled();
//   },
// };

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import {
  fn,
  expect,
  userEvent,
  within,
} from "storybook/test";

import TopBar from "./TopBar";

const meta: Meta<typeof TopBar> = {
  title: "Organisms/TopBar",
  component: TopBar,

  tags: ["autodocs"],

  args: {
    onLogout: fn(),
  },

  parameters: {
    docs: {
      description: {
        component:
          "Displays the greeting, notification button and profile menu.",
      },
    },
  },

  decorators: [
    (Story) => (
      <div
        style={{
          background: "#201F24",
          padding: 16,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const Playground: Story = {
  play: async ({ canvas, args }) => {
    const profileButton =
      canvas.getByLabelText(/profile menu/i);

    await userEvent.click(profileButton);

    const body = within(document.body);

    const logout =
      await body.findByText(/log out/i);

    await userEvent.click(logout);

    await expect(args.onLogout).toHaveBeenCalled();
  },
};