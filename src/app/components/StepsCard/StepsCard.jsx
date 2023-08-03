import styles from "./StepsCard.module.css";
import Image from "next/legacy/image";
import dummyicon from "../../../assets/dummyicon.png"

export default function StepsCard() {
  const cards = [
    {
      src: dummyicon,
      name: "STEP 1: COMPLETE PROFILE",
      alt: "step-1",
      desc: "Once you are approved, we showcase you to leading Indian technology startups",
    },
    {
      src: dummyicon,
      name: "STEP 2: RECEIVE JOB OFFERS",
      alt: "step-2",
      desc: "Companies start sending interview requests. Talk to only the ones you like.",
    },
    {
      src: dummyicon,
      name: "STEP 3: ACCEPT DREAM JOB",
      alt: "step-3",
      desc: "Compare your offers and accept the best one. Hired!",
    },
  ];
  const renderStepsCards = () => {
    return cards.map((icon) => (
      <div key={icon.alt} className={styles.container}>
        <div className={styles.image}>
          <Image src={icon.src} alt="dummyicon" width={20} height={20} />
        </div>
        <div>{icon.name}</div>
        <div>{icon.desc}</div>
      </div>
    ));
  };

  return (
    <>
      <div className={styles.wrapper}>{renderStepsCards()}</div>
    </>
  );
}
