import ClubCard from "../components/ClubCard";
import { CLUBS } from "../data/data";

export default function Club() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {CLUBS &&
          CLUBS.length &&
          CLUBS.map((club) => <ClubCard key={club.id} club={club} />)}
      </div>
    </>
  );
}
