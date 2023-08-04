import NavBar from "./Navbar/Navbar";
import style from "../page.module.css";
import HeroContent from "./HeroContent/HeroContent";
import CleintSection from "./ClientSection/ClientSection";
import Footer from "./Footer/Footer";
import Panel from "./Panel/Panel";

const HomePage = () => {
  return (
    <main className={style.main}>
      <NavBar />
      <HeroContent />
      <CleintSection />
      <Panel />
      <Footer />
    </main>
  );
};

export default HomePage;
