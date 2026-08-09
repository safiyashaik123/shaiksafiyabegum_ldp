import MuiDivider, {
  DividerProps,
} from "@mui/material/Divider";

const Divider = (props: DividerProps) => {
  return (
    <MuiDivider
      sx={{
        borderColor: "divider",
      }}
      {...props}
    />
  );
};

export default Divider;