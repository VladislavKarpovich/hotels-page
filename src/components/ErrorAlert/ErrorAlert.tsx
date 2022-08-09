import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const ErrorAlert = () => {
  return (
    <Alert severity="error" sx={{ my: 1 }}>
      <AlertTitle>Error</AlertTitle>
      Hotels <strong>loading error</strong> occupancy. Please try again
    </Alert>
  );
};
