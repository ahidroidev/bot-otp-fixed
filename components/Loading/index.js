import styles from "../../styles/Pages.module.css";

export default function New({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>DEVOTP-V6 </h1>
        <p className={styles.description}>
          Status in checking... Please wait a moment.
        </p>
        <h1 className={styles.code}>Encrypt DATA...</h1>
        <p>{"[ Premium OTP ]"}</p>
        <button onClick={() => navigateToPage("getotp")}>
          {"< Stop uncrypt data.  "}
        </button>
      </main>
    </div>
  );
}
