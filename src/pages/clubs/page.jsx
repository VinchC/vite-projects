import { useParams } from "react-router";
import ClubCard from "../../components/ClubCard";
import { CLUBS } from "../../data/data";

export default function ClubPage() {
  const { id } = useParams();
  const clubToDisplay = CLUBS.filter((club) => club.id == id)[0];

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <ClubCard club={clubToDisplay} />
      </div>
    </>
  );
}
