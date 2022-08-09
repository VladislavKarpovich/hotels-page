import GlobalStyles from "@mui/material/GlobalStyles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { PagePreview } from "components/PagePreview";
import placesImage from "assets/places.webp";
import { HotelCard } from "components/HotelCard";
import { useHotelsFilter } from "services/hotels-filter.hook";
import { HotelCardPlaceholder } from "components/HotelCardPlaceholder";
import { ErrorAlert } from "components/ErrorAlert";

export const App = () => {
  const {
    isLoading,
    isError,
    hotels,
    minRating,
    setMinRating,
    adultsMinAmount,
    setAdultsMinAmount,
    childrenMinAmount,
    setChildrenMinAmount,
  } = useHotelsFilter();  

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#fafafa",
          },
        }}
      />
      <Container maxWidth="lg">
        <Header
          title="Hotels"
          rating={minRating}
          adultsAmount={adultsMinAmount}
          childrenAmount={childrenMinAmount}
          onRatingChange={setMinRating}
          onChildrenAmountChange={setChildrenMinAmount}
          onAdultsAmountChange={setAdultsMinAmount}
        />
        <main>
          <PagePreview
            title="Discover new places with us"
            description="We believe that time is your most precious resource and that it’s better spent delighting guests rather than managing the hotel's operations."
            imageSrc={placesImage}
          />
          {isError && <ErrorAlert />}
          <Box mt={2}>
            {isLoading || isError ? (
              <>
                {Array.from({ length: 5 }, (_, index) => (
                  <HotelCardPlaceholder key={index} />
                ))}
              </>
            ) : (
              <>
                {hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </>
            )}
          </Box>
        </main>
      </Container>
      <Footer
        title="We're Here to Help"
        description="At Guestline we believe in substance and results over superficial style."
        copyright={`Copyright © ${new Date().getFullYear()}.`}
      />
    </>
  );
};
