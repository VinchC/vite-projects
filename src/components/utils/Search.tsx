export default function Search({ query, setQuery, handleSearch }) {

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSearch} className="search-form mt-8">
          <input
            type="text"
            value={query}
            placeholder="Your search..."
            className="search-input"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
