import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface ImgCarouselProps {
  images: { url: string; alt?: string }[];
  altPlaceholder: string;
  size: number;
  sx?: SxProps<Theme>;
}

export const ImgCarousel = (props: ImgCarouselProps) => {
  const { images, altPlaceholder, size, sx } = props;

  const hasManyImages = images.length > 1;

  return (
    <Box sx={{ width: size, height: size, ...sx }}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay
        showIndicators={hasManyImages}
      >
        {images.map(({ url, alt }, index) => (
          <Box key={url} sx={{ width: size, height: size }}>
            <img
              src={url}
              alt={alt || `${altPlaceholder} ${index + 1}`}
              loading="lazy"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
