import { Outlet } from "react-router-dom";
import Header from "./components/utils/Header";
import Footer from "./components/utils/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="mt-24" id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
