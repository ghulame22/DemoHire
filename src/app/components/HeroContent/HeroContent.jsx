import StepsCard from "../StepsCard/StepsCard";
import styles from "./HeroContent.module.css";

export default function HeroContent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
        <h1>Find your next top tech job in 1 week.</h1>
        <div>
          <p>
            Are you a top 2% Software Engineer, Product Manager or Data
            Scientist?
          </p>
          <p>Let leading Indian technology companies compete to hire you.</p>
        </div>
        <div className={styles.button_wrapper}>
          <button className={styles.button}>APPLY TO JOIN</button>
          <span>100% free. It takes only 5 minutes</span>
        </div>
      </div>
      <StepsCard />
    </div>
  );
}
