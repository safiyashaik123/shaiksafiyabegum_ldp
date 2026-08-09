import Chip from "@mui/material/Chip";

interface StatusChipProps {
  label: string;
}

const StatusChip = ({
  label,
}: StatusChipProps) => {
  const getStyles = () => {
    switch (label) {
      case "Paid":
        return {
          backgroundColor: "#1F3A2E",
          color: "#7BD88F",
        };

      case "Pending":
        return {
          backgroundColor: "#4A331D",
          color: "#F6A44D",
        };

      case "Upcoming":
        return {
          backgroundColor: "#34333A",
          color: "#C9C8CC",
        };

      default:
        return {
          backgroundColor: "#34333A",
          color: "#FFFFFF",
        };
    }
  };

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        ...getStyles(),
        borderRadius: "6px",
        fontWeight: 600,
        height: 28,
      }}
    />
  );
};

export default StatusChip;