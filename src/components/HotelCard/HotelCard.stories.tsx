import { HotelCard } from "./HotelCard";
import { ComponentMeta } from "@storybook/react";
import { HotelWithRoomsModel } from "types/HotelWithRoomsModel";

const hotelInfo: HotelWithRoomsModel = {
  id: "OBMNG1",
  name: "OBM Hotel 1",
  description:
    "Etag for the win chocolate biscuit wafer soufflé toffee toffee donut. Tart biscuit wafer pudding chocolate cake oat cake halvah\r\nMarshmallow halvah gingerbread apple pie muffin biscuit. Cake pudding topping pie lemon drops lollipop. Bear claw oat cake jelly beans. Bonbon toffee caramels pudding gingerbread cookie lollipop.",
  address1: "Shrewsbury",
  address2: "Address 2",
  postcode: "WC1R 4PS",
  town: "London",
  country: "United Kingdom",
  countryCode: "GB",
  starRating: "4",
  facilities: [],
  telephone: "12345666",
  email: "JabbaScript@guestline.com",
  images: [
    {
      url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG",
    },
    {
      url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/hotel4.jpg",
    },
    {
      url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room5.jpg",
    },
  ],
  checkInHours: "14",
  checkInMinutes: "00",
  checkOutHours: "11",
  checkOutMinutes: "00",
  position: {
    latitude: 51.507351,
    longitude: -0.127758,
    timezone: "GMT+1",
  },
  rooms: [
    {
      id: "DTFF",
      name: "Deluxe Twin",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes.",
      occupancy: {
        maxAdults: 2,
        maxChildren: 0,
        maxOverall: 2,
      },
      disabledAccess: false,
      bedConfiguration: "Twin",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room3.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
      ],
      facilities: [
        {
          code: "8",
          name: "Mini Bar",
        },
        {
          code: "5",
          name: "Video",
        },
        {
          code: "28",
          name: "Kitchen Utensils",
        },
      ],
    },
    {
      id: "STND",
      name: "Double/Twin Standard Double",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Bear claw marshmallow bear claw tiramisu caramels dragée. Pastry sweet sugar plum sugar plum candy icing tiramisu danish.\r\nHalvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes to",
      occupancy: {
        maxAdults: 2,
        maxChildren: 0,
        maxOverall: 2,
      },
      disabledAccess: false,
      bedConfiguration: "Both",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room4.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
      ],
      facilities: [
        {
          code: "17",
          name: "Air Conditioning",
        },
        {
          code: "5",
          name: "Video",
        },
        {
          code: "16",
          name: "Hair Dryer",
        },
      ],
    },
    {
      id: "STTW",
      name: "Standard Twin",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription: "Standard Twin",
      occupancy: {
        maxAdults: 2,
        maxChildren: 1,
        maxOverall: 2,
      },
      disabledAccess: false,
      bedConfiguration: "Twin",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room4.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
      ],
      facilities: [
        {
          code: "2",
          name: "High Speed Internet Access",
        },
        {
          code: "30",
          name: "Games Console",
        },
      ],
    },
    {
      id: "PSFF",
      name: "Principle Suite Front Facing",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes.",
      occupancy: {
        maxAdults: 2,
        maxChildren: 1,
        maxOverall: 3,
      },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room4.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
      ],
      facilities: [
        {
          code: "16",
          name: "Hair Dryer",
        },
        {
          code: "20",
          name: "Cooking Facilities",
        },
      ],
    },
  ],
};

const info: ComponentMeta<typeof HotelCard> = {
  title: "HotelCard",
  component: HotelCard,
};

export const DefaultView = () => <HotelCard hotel={hotelInfo} />;

export default info;
