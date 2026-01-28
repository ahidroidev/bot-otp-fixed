import styles from '../../styles/Pages.module.css';

export default function New({ navigateToPage}) {
    return (
        <div className={styles.container}>
        <main className={styles.main}>
        <h1 className={styles.title}>DEVOTP-V6 </h1>
          <p className={styles.description}>
            {" > OTP Confirmed successfully!"}
          </p>
          <h1 className={styles.code}>{"OTP: 892-237"}</h1>
          <h1 className={styles.code}>{"TOKEN: ERR_2"}</h1>
          <p>{"[ Premium OTP ]"}</p>
          <button onClick={() => navigateToPage('index')}>{" Get another OTP >"}</button>
        </main>
      </div>
    );
  }