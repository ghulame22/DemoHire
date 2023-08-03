import NavBar from "./Navbar/Navbar";
import style from "../page.module.css";
import HeroContent from "./HeroContent/HeroContent";

const HomePage = () => {
  return (
    <main className={style.main}>
      <NavBar />
      <HeroContent />
    </main>
  );
};

export default HomePage;
