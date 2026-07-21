import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Box, InputAdornment } from "@mui/material";

import Button from "../../atoms/Button/Button";
import InputField from "../../atoms/InputField/InputField";

type SearchSectionProps = {
  search: string;
  onSearchChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function SearchSection({
  search,
  onSearchChange,
}: SearchSectionProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 320,
        }}
      >
        <InputField
          placeholder="Search Candidate"
          value={search}
          onChange={onSearchChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Button
        variant="outlined"
        startIcon={<FilterListIcon />}
      >
        Filter
      </Button>

      <Button
        variant="outlined"
        sx={{
          minWidth: 40,
          px: 1,
        }}
      >
        <MoreVertIcon />
      </Button>
    </Box>
  );
}

export default SearchSection;