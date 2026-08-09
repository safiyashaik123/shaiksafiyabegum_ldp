// import type { Meta, StoryObj } from "@storybook/react-webpack5";
// import { expect, fn } from "storybook/test";

// import ProfileMenu from "./ProfileMenu";

// const meta: Meta<typeof ProfileMenu> = {
//   title: "Molecules/ProfileMenu",
//   component: ProfileMenu,

//   tags: ["autodocs"],

//   parameters: {
//     docs: {
//       description: {
//         component:
//           "Displays the user avatar and opens a profile menu with account actions such as Help, Settings and Logout.",
//       },
//     },
//   },

//   args: {
//     name: "Safiya",
//     onLogout: fn(),
//   },

//   argTypes: {
//     name: {
//       control: "text",
//       description: "Name displayed in the profile menu.",
//     },
//     onLogout: {
//       control: false,
//       description: "Callback fired when the user selects Log Out.",
//     },
//   },
// };

// export default meta;

// type Story = StoryObj<typeof ProfileMenu>;

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
  expect,
  fn,
  within,
} from "storybook/test";

import ProfileMenu from "./ProfileMenu";

const meta: Meta<typeof ProfileMenu> = {
  title: "Molecules/ProfileMenu",
  component: ProfileMenu,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Displays the user avatar and opens a profile menu with account actions such as Help, Settings and Logout.",
      },
    },
  },

  args: {
    name: "Safiya",
    onLogout: fn(),
  },

  argTypes: {
    name: {
      control: "text",
      description: "Name displayed in the profile menu.",
    },

    onLogout: {
      control: false,
      description:
        "Callback fired when the user selects Log Out.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProfileMenu>;

export const Playground: Story = {
  play: async ({
    canvas,
    userEvent,
    args,
  }) => {
    const profileMenu =
      canvas.getByLabelText(/profile menu/i);

    await userEvent.click(profileMenu);

    const body = within(document.body);

    const logout =
      await body.findByText(/log out/i);

    await userEvent.click(logout);

    await expect(args.onLogout).toHaveBeenCalled();
  },
};