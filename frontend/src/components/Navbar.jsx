import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar({ onLogin, onSignup }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleLogin = () => { closeMenu(); onLogin(); };
  const handleSignup = () => { closeMenu(); onSignup(); };

  return (
    <>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <div className={styles.logoDot} />
          MicroLearn
        </a>

        {/* Desktop links */}
        <div className={styles.links}>
          <a className={styles.link} href="#features">Features</a>
          <a className={styles.link} href="#how">How it works</a>
          <a
            className={styles.link}
            href="#"
            onClick={(e) => { e.preventDefault(); onLogin(); }}
          >
            Log in
          </a>
          <button className={styles.cta} onClick={onSignup}>
            Sign Up
          </button>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`${styles.mobileMenu} ${menuOpen ? '' : styles.hidden}`}>
        <a className={styles.mobileLink} href="#features" onClick={closeMenu}>Features</a>
        <a className={styles.mobileLink} href="#how" onClick={closeMenu}>How it works</a>
        <a
          className={styles.mobileLink}
          href="#"
          onClick={(e) => { e.preventDefault(); handleLogin(); }}
        >
          Log in
        </a>
        <button className={styles.mobileCta} onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </>
  );
}