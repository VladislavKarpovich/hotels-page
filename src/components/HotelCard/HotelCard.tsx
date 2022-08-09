import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Collapse from "@mui/material/Collapse";
import { HotelWithRoomsModel } from "types/HotelWithRoomsModel";
import { ImgCarousel } from "./ImgCarousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface HotelCardProps {
  hotel: HotelWithRoomsModel;
}

export const HotelCard = (props: HotelCardProps) => {
  const { hotel } = props;

  const [isShowAllRooms, setIsShowAllRooms] = useState(false);
  const toggleShowAllRooms = () => setIsShowAllRooms((prev) => !prev);

  const collapsedSize = Math.min(hotel.rooms.length, 3) * 160;

  return (
    <Paper sx={{ mb: 2, p: 2, overflow: "hidden" }}>
      <Box sx={{ display: { md: "flex" }, mb: 2 }}>
        <ImgCarousel
          images={hotel.images}
          altPlaceholder={hotel.name}
          size={250}
          sx={{ mr: 2 }}
        />
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              display: { md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography variant="h5" gutterBottom>
              {hotel.name}
            </Typography>

            <Rating name="Hotel rating" value={+hotel.starRating} />
          </Box>

          <Typography variant="body2">{hotel.description}</Typography>

          <Grid container>
            <Grid item xs={12} md={6} mt={2}>
              <Typography variant="subtitle1">Contact us:</Typography>
              <Typography variant="body2">
                Email: <Link href={`mailto:${hotel.email}`}>{hotel.email}</Link>
              </Typography>
              <Typography variant="body2">
                Phone:{" "}
                <Link href={`tel:${hotel.telephone}`}>{hotel.telephone}</Link>
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} mt={2}>
              <Typography variant="subtitle1">Location:</Typography>
              <Typography variant="body2">
                {`${hotel.country}, ${hotel.address1}`}
              </Typography>
              <Typography variant="body2">{hotel.address2}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography variant="caption" textAlign="center" component="div">
        Rooms
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box>
        <Collapse
          in={isShowAllRooms}
          collapsedSize={collapsedSize}
          id="collapsedSize"
        >
          <Box sx={{ mb: "40px" }}>
            {hotel.rooms.map((room) => (
              <Box key={room.id} sx={{ display: { md: "flex" }, mb: 1 }}>
                <ImgCarousel
                  images={hotel.images}
                  altPlaceholder={hotel.name}
                  size={170}
                  sx={{ mr: 2 }}
                />

                <Box>
                  <Typography variant="h6" gutterBottom>
                    {room.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {room.shortDescription}
                  </Typography>

                  <Typography variant="subtitle1" mt={2}>
                    Occupancy
                  </Typography>
                  <Typography variant="body2">
                    Adult: {room.occupancy.maxAdults}
                  </Typography>
                  <Typography variant="body2">
                    Children: {room.occupancy.maxChildren}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    {room.facilities.slice(0, 5).map((facility) => (
                      <Chip
                        size="small"
                        key={facility.code}
                        label={facility.name}
                        variant="outlined"
                      />
                    ))}

                    {room.facilities.length > 5 && (
                      <Chip
                        size="small"
                        label="And more..."
                        variant="outlined"
                        color="primary"
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Collapse>
        {hotel.rooms.length > 3 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              "&::before": {
                position: "absolute",
                content: "' '",
                height: "40px",
                left: 0,
                right: 0,
                bottom: "100%",
                background: "linear-gradient(180deg, #FFFFFF00, #FFFFFFFF)",
              },
            }}
          >
            <Button onClick={toggleShowAllRooms} size="small">
              {isShowAllRooms ? "Hide" : "Show all"}
            </Button>
          </Box>
        )}
      </Box>
    </Paper>
  );
};
