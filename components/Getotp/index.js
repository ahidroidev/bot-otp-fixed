import styles from '../../styles/Pages.module.css';

export default function New({ navigateToPage}) {
    return (
        <div className={styles.container}>
        <main className={styles.main}>
        <h1 className={styles.title}>DEVOTP-V6 </h1>
          <p className={styles.description}>
            {" > OTP Confirmed successfully!"}
          </p>
          <h1 className={styles.code}>{"OTP: 783-892"}</h1>
          <p>{"[ Premium OTP ]"}</p>
          <p onClick={() => navigateToPage('index')}>{" Get another OTP >"}</p>
        </main>
      </div>
    );
  }