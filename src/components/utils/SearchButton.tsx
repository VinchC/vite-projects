export default function SearchButton() {
  return (
    <button
      type="submit"
      aria-label="lance la recherche de contenu dans le titre ou le texte d'un article"
      className="absolute right-0 top-0 mt-1 mr-2"
    >
      <svg
        className="h-6 w-6 fill-black"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
