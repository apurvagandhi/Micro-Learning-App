import styles from '../styles/FooterCTA.module.css';

export default function FooterCTA({ onSignup }) {
  return (
    <section className={styles.footer}>
      <h2 className={styles.title}>Ready to start learning?</h2>
      <p className={styles.sub}>
        Join curious minds. Get started today.
      </p>
      <button className={styles.btn} onClick={onSignup}>
        Create your account →
      </button>
    </section>
  );
}