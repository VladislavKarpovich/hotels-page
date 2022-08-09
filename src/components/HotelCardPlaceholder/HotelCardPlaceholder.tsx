import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export const HotelCardPlaceholder = () => {
  return (
    <Paper sx={{ mb: 2, p: 2 }}>
      <Box sx={{ display: { md: "flex" }, mb: 2 }}>
        <Skeleton variant="rectangular" width={250} height={250} />
        <Box sx={{ mx: 2, mt: 1 }}>
          <Skeleton
            variant="rectangular"
            width={150}
            height={40}
            sx={{ mb: 1 }}
          />
          <Skeleton variant="text" width={250} />
          <Skeleton variant="text" width={250} />
          <Skeleton variant="text" width={250} />
        </Box>
      </Box>
      <Typography variant="caption" textAlign="center" component="div">
        Rooms
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box sx={{ display: { md: "flex" } }}>
        <Skeleton variant="rectangular" width={170} height={170} />
        <Box sx={{ mx: 2, mt: 1 }}>
          <Skeleton
            variant="rectangular"
            width={150}
            height={40}
            sx={{ mb: 1 }}
          />
          <Skeleton variant="text" width={250} />
        </Box>
      </Box>
    </Paper>
  );
};
