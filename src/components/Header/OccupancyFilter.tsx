import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { grey } from "@mui/material/colors";

const OCCUPANCY_LIMIT = 10;

export interface OccupancyFilterProps {
  title: string;
  amount: number;
  onAmountChange: (amount: number) => void;
}

export const OccupancyFilter = (props: OccupancyFilterProps) => {
  const { title, amount, onAmountChange } = props;

  const handleRemovePress = () => {
    if (amount > 0) {
      onAmountChange(amount - 1);
    }
  };

  const handleAddPress = () => {
    if (amount < OCCUPANCY_LIMIT) {
      onAmountChange(amount + 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: grey[200],
        p: 1,
        mx: 1,
        borderRadius: 8,
      }}
    >
      <Typography sx={{ m: 1 }}>{title}</Typography>
      <IconButton onClick={handleRemovePress}>
        <RemoveIcon />
      </IconButton>
      <Typography sx={{ m: 1 }}>{amount}</Typography>
      <IconButton onClick={handleAddPress}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};
