import Toolbar from "@mui/material/Toolbar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { OccupancyFilter } from "./OccupancyFilter";

export interface HeaderProps {
  title: string;
  rating: number | null;
  adultsAmount: number;
  childrenAmount: number;
  onRatingChange: (rating: number | null) => void;
  onChildrenAmountChange: (amount: number) => void;
  onAdultsAmountChange: (amount: number) => void;
}

export const Header = (props: HeaderProps) => {
  const {
    title,
    rating,
    adultsAmount,
    childrenAmount,
    onRatingChange,
    onChildrenAmountChange,
    onAdultsAmountChange,
  } = props;

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        sx={{ justifyContent: "space-between", overflowX: "auto", mb: 1 }}
      >
        <Rating
          value={rating}
          onChange={(_, newValue) => {
            onRatingChange(newValue);
          }}
        />
        <Box sx={{ display: "flex" }}>
          <OccupancyFilter
            title="Adults"
            amount={adultsAmount}
            onAmountChange={onAdultsAmountChange}
          />
          <OccupancyFilter
            title="Children"
            amount={childrenAmount}
            onAmountChange={onChildrenAmountChange}
          />
        </Box>
      </Toolbar>
    </>
  );
};
