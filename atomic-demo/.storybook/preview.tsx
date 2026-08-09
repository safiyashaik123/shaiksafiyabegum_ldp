import type { Preview } from "@storybook/react";
import lightTheme from "../src/storybookpractice/themes/lightTheme";
import darkTheme from "../src/storybookpractice/themes/darkTheme";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme",
      defaultValue: "light",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme =
        context.globals.theme === "dark" ? darkTheme : lightTheme;

      return (
        <div
          style={
            {
              background: theme.colors.background,
              color: theme.colors.text,

              /* Design Tokens */

              "--background": theme.colors.background,
              "--surface": theme.colors.surface,

              "--text": theme.colors.text,
              "--text-secondary": theme.colors.textSecondary,

              "--primary": theme.colors.primary,
              "--secondary": theme.colors.secondary,
              "--success": theme.colors.success,
              "--danger": theme.colors.danger,

              "--border": theme.colors.border,

              "--disabled": theme.colors.disabled,

              minHeight: "100vh",
              padding: "20px",
              transition: "all 0.3s ease",
            } as React.CSSProperties
          }
        >
          <Story />
        </div>
      );
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    viewport: {
      defaultViewport: "responsive",
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;