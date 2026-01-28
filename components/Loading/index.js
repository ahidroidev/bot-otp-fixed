import styles from '../../styles/Pages.module.css';

export default function New({ navigateToPage}) {
    return (
        <div className={styles.container}>
        <main className={styles.main}>
        <h1 className={styles.title}>DEVOTP-V6 </h1>
          <p className={styles.description}>
            Status in checking... Please wait a moment.
          </p>
          <h1 className={styles.code}>New Page ./components/New/index.js</h1>
          <p>{"[ Premium OTP ]"}</p>
          <p onClick={() => navigateToPage('getotp')}>{"< Stop uncrypt data.  "}</p>
        </main>
      </div>
    );
  }