import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export interface PagePreviewProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const PagePreview = (props: PagePreviewProps) => {
  const { imageSrc, title, description } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.5)",
        }}
      />
      <Grid container>
        <Grid item md={8} sm={12}>
          <Box
            sx={{
              position: "relative",
              px: { xs: 3, md: 6 },
              py: { xs: 6, md: 14 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
