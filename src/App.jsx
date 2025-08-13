import "./App.css";
import MovieCard from "./components/MovieCard";

import data from "./data.json";

function App() {
  return (
    <>
      <div className="movie-container">
        {data.movies.map((i) => (
          <MovieCard key={i.id} movie={i} />
        ))}
      </div>
    </>
  );
}

export default App;
