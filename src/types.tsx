export type PlayerProps = {
  id: number;
  full_name: string;
  picture: string;
  description: string;
};

export type ClubProps = {
  id: number;
  name: string;
  picture: string;
  city: string;
  continent: string;
};

export type CountryProps = {
  id: number;
  name: string;
  picture: string;
  continent: string;
};

export type NavbarProps = {
  id: number;
  name: string;
  href: string;
  current: boolean;
};
