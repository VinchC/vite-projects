export default function Search({ searchQuery, setSearchQuery, handleSearch }) {
  
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSearch} className="search-form mt-8">
          <input
            type="text"
            value={searchQuery}
            placeholder="Your search..."
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
