import { Link } from "react-router-dom";

export default function ClubCard({ club }) {
  return (
    <>
      <div className="flex flex-col justify-between items-center m-[4rem]">
        <div className="flex flex-col items-center">
          <img className="max-w-3xs" src={club.picture} alt={club.name} />
        </div>
        <div className="flex flex-col items-center">
          <h3>
            <Link to={`/clubs/${club.id}`}>{club.name}</Link>
          </h3>
          <p>{club.continent}</p>
        </div>
      </div>
    </>
  );
}
