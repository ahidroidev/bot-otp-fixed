import styles from '../../styles/Pages.module.css';

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Created by: @devcrackpy</h1>
        <p className={styles.description}>
          This OTP is private.
        </p>
        <h1 className={styles.code}>Index Page ./components/Index/index.js</h1>
        <p>{"For correctly use, u should insert the number phone for you can get this code OTP."}</p>
        <p onClick={() => navigateToPage('new')}>{"Get OTP Code >"}</p>
      </main>
    </div>
  );
}
