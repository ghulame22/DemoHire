import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar_wrapper}>
      <nav className={styles.navbar_container}>
        <a className={styles.navbar_title}>DemoHire</a>
        <div className={styles.navbar_container_menu}>
          <div>For Employers</div>
          <div>Refer & Earn 15k</div>
          <div>Login</div>
          <div>Sign Up</div>
        </div>
      </nav>
    </div>
  );
}
