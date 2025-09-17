import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  return (
    <>
      <div className="flex flex-col justify-between items-center m-[4rem]">
        <div className="flex flex-col items-center">
          <img className="max-w-3xs" src={country.picture} alt={country.name} />
        </div>
        <div className="flex flex-col items-center">
          <h3>
            <Link to={`/countries/${country.id}`}>{country.name}</Link>
          </h3>
          <p>{country.continent}</p>
        </div>
      </div>
    </>
  );
}
