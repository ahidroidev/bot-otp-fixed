import styles from '../../styles/Pages.module.css';

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}> Society . E X E</h1>
        <p className={styles.description}>
          DEVOTP-V6
        </p>
        <input className={styles.code} placeholder="Enter phone number"></input>
        <p>{"[ Premium OTP ]"}</p>
        <p onClick={() => navigateToPage('loading')}>{"Get OTP Code >"}</p>
      </main>
    </div>
  );
}
