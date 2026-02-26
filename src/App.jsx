import "./styles/global.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Logos from "./components/Logos.jsx";
import Categories from "./components/Categories.jsx";
import Vacancies from "./components/Vacancies.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <Hero />
        <Logos />
        <Categories />
        <Vacancies />
      </main>

      <Footer />
    </div>
  );
}
