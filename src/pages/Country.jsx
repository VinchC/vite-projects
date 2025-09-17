import CountryCard from "../components/CountryCard";
import { COUNTRIES } from "../data/data";

export default function Country() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {COUNTRIES &&
          COUNTRIES.length &&
          COUNTRIES.map((country) => <CountryCard key={country.id} country={country} />)}
      </div>
    </>
  );
}
