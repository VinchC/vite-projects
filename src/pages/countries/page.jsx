import { useParams } from "react-router";
import CountryCard from "../../components/CountryCard";
import { COUNTRIES } from "../../data/data";

export default function CountryPage() {
  const { id } = useParams();
  const countryToDisplay = COUNTRIES.filter((country) => country.id == id)[0];

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <CountryCard country={countryToDisplay} />
      </div>
    </>
  );
}
