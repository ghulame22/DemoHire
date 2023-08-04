import styles from "./Panel.module.css";
import Image from "next/legacy/image";
import panelimg from "../../../assets/panelimg.jpg";
import panelimgsecond from "../../../assets/panelimgsecond.jpg";
import panelimgthird from "../../../assets/panelimgthird.jpg";

export default function Panel() {
  const panels = [
    {
      src: panelimg,
      name: "Create your free candidate profile",
      alt: "contents",
      desc: "Answer a few questions about yourself - it takes less than 5 minutes",
      desc_other:
        "What is your biggest achievement? What does your ideal opportunity look like?",
    },
    {
      src: panelimgsecond,
      name: "Sit back while companies compete to hire you",
      alt: "contents",
      desc: "Don’t waste your time reaching out to companies or dealing with recruiters.",
      desc_other:
        "We fast-track your profile to hiring managers. Get multiple interview requests with upfront salary offers within days.",
    },
    {
      src: panelimgthird,
      name: "Salary & Role transparency",
      alt: "contents",
      desc: "Interview requests from companies mention salary and role details upfront - before you decide to accept or decline them.",
    },
  ];
  const renderPanel = () => {
    return panels.map((icon) => (
      <div key={icon.alt} className={styles.container}>
        <div className={styles.image}>
          <Image src={icon.src} alt="panelimg" />
        </div>
        <div className={styles.details}>
          <div>{icon.name}</div>
          <div>{icon.desc}</div>
          <div>{icon.desc_other}</div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className={styles.heading}>
        <span>HOW IT WORKS</span>
      </div>
      <div className={styles.wrapper}>{renderPanel()}</div>
    </>
  );
}
