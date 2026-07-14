const components = {
  MuiCard: {
    styleOverrides: {
      root: {
        width: 340,
        borderRadius: 12,
        padding: 32,
        backgroundColor: "#201F24",
        border: "1px solid #28272B",
        boxShadow: "none",
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        textTransform: "none",
        fontWeight: 600,
      },
    },
  },

  MuiSlider: {
    styleOverrides: {
      root: {
        color: "#6D5EF7",
      },
    },
  },
};

export default components;