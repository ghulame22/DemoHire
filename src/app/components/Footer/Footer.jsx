import styles from "./Footer.module.css";
import Image from "next/legacy/image";
import dummyicon from "@/assets/dummyicon.png";

export default function Footer() {
  return (
    <>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_container}>
          <div>
            <a className={styles.footer_title}>DemoHire</a>
            <span>
              TopHire is on a mission to make it dead simple for leading Indian
              startups to hire the top 2% of tech talent.
            </span>
          </div>
          <div className={styles.footer_container_menu}>
            <div className={styles.lists}>
              <div>CANDIDATES</div>
              <div>
                <div>For Candidates</div>
                <div>Candidate Sign Up</div>
                <div>Invite & Earn ₹15k</div>
                <div>Candidate FAQ</div>
              </div>
            </div>
            <div className={styles.lists}>
              <div>EMPLOYERS</div>
              <div>
                <div>For Employers</div>
                <div>Employers Sign Up</div>
                <div>Employers FAQ</div>
              </div>
            </div>
            <div className={styles.lists}>
              <div>COMPANY</div>
              <div>
                <div>Careers</div>
                <div>Privacy Policy</div>
              </div>
            </div>
            <div className={styles.lists}>
              <div>PARTNERS</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tnc_wrapper}>
        <div className={styles.tnc}>
          <span>© 2023 DemoHire. All Rights Reserved</span>
        </div>
      </div>
    </>
  );
}
