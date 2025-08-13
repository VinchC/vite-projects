import "./App.css";
import Count from "./components/Count";
import MovieCard from "./components/MovieCard";
import Text from "./components/Text";

import data from "./data.json";

function App() {
  return (
    <>
      <div className="movie-container">
        {data.movies.map((i) => (
          <MovieCard movie={i} />
        ))}
      </div>
    </>
  );
}

export default App;
