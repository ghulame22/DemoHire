import styles from "./ClientSection.module.css";
import Image from "next/legacy/image";
import clientsImage from "@/assets/clientsImage.jpg"

export default function CleintSection() {
  return (
    <div className={styles.container} >
      <span>LEADING COMPANIES BUILD TEAMS ON TOPHIRE</span>
      <div className={styles.image}>
        <Image src={clientsImage} alt="clients" />
      </div>
    </div>
  );
}
