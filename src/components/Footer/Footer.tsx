import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export interface FooterProps {
  description: string;
  title: string;
  copyright: string;
}

export const Footer = (props: FooterProps) => {
  const { description, title, copyright } = props;

  return (
    <Box component="footer" sx={{ bgColor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {copyright}
        </Typography>
      </Container>
    </Box>
  );
};
