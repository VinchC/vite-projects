import { ClubProps, CountryProps, PlayerProps } from "../types";

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
