import { ClubProps, CountryProps, NavbarProps, PlayerProps } from "../types";

export const NAVBAR_LINKS: NavbarProps[] = [
  {
    id: 1,
    name: "Players",
    href: "/players",
    current: false,
  },
  {
    id: 2,
    name: "Clubs",
    href: "/clubs",
    current: false,
  },
  {
    id: 3,
    name: "Countries",
    href: "/countries",
    current: false,
  },
  {
    id: 4,
    name: "Favorites",
    href: "/favorites",
    current: false,
  },
  {
    id: 5,
    name: "About",
    href: "/about",
    current: false,
  },
];

export const PLAYERS: PlayerProps[] = [
  {
    id: 1,
    full_name: "Zinedine Zidane",
    picture: "/zidane.jpg",
    description: "Double buteur en Coupe du Monde",
  },
  {
    id: 2,
    full_name: "Cristiano Ronaldo",
    picture: "/Cristiano_Ronaldo.jpg",
    description: "Le joueur préféré d'Alexandre",
  },
];

export const COUNTRIES: CountryProps[] = [
  {
    id: 1,
    name: "France",
    picture: "/Flag_of_France.svg",
    continent: "Europe",
  },
  {
    id: 2,
    name: "Portugal",
    picture: "/Flag_of_Portugal.svg",
    continent: "Europe",
  },
];

export const CLUBS: ClubProps[] = [
  {
    id: 1,
    name: "Paris Saint-Germain",
    picture: "/psg.jpg",
    city: "Paris",
    continent: "Europe",
  },
  {
    id: 2,
    name: "Juventus Football Club",
    picture: "/turin.webp",
    city: "Turin",
    continent: "Europe",
  },
];
