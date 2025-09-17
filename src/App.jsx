import { Outlet } from "react-router-dom";
import Header from "./components/utils/Header";
import Footer from "./components/utils/Footer";
import { PlayerProvider } from "./contexts/PlayerContext";

function App() {
  return (
    <>
      <PlayerProvider>
        <Header />
        <main className="mt-24 min-h-96" id="main">
          <Outlet />
        </main>
        <Footer />
      </PlayerProvider>
    </>
  );
}

export default App;
