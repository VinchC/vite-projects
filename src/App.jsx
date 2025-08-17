import { Outlet } from "react-router-dom";
import Header from "./components/utils/Header";
import Footer from "./components/utils/Footer";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <Header />
        <main className="mt-24" id="main">
          <Outlet />
        </main>
        <Footer />
      </MovieProvider>
    </>
  );
}

export default App;
