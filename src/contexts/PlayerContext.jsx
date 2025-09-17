import { useContext, createContext, useEffect, useState } from "react";

const PlayerContext = createContext();

export const usePlayerContext = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  // console.log(favorites);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (player) => {
    setFavorites((prev) => [...prev, player]);
  };

  const removeFromFavorites = (playerId) => {
    setFavorites((prev) => prev.filter((player) => player.id !== playerId));
  };

  const isFavorite = (playerId) => {
    return favorites.some((player) => player.id === playerId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
