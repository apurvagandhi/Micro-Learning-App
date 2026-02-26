import { useState, useEffect } from 'react';
import styles from '../styles/AuthModal.module.css';

export default function AuthModal({ initialTab = 'login', onClose }) {
  const [tab, setTab] = useState(initialTab);
  const [form, setForm] = useState({ name: '', email: '', password: '', role: ''});

  // Sync tab when modal is re-opened with a different initialTab
  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleInput = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: auth API
    console.log('Submit:', tab, form);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className={styles.logo}>MicroLearn</div>
        <h2 className={styles.title}>
          {tab === 'login' ? 'Welcome back' : 'Get started free'}
        </h2>
        <p className={styles.subtitle}>
          {tab === 'login'
            ? 'Sign in to continue your learning journey.'
            : 'Create your account and start learning today.'}
        </p>

        {/* Tab switcher */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${tab === 'login' ? styles.active : ''}`}
            onClick={() => setTab('login')}
          >
            Log in
          </button>
          <button
            className={`${styles.tab} ${tab === 'signup' ? styles.active : ''}`}
            onClick={() => setTab('signup')}
          >
            Sign up
          </button>
        </div>

        <div className={styles.divider}>or</div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {tab === 'signup' && (
            <>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full name</label>
              <input
                className={styles.input}
                name="name"
                type="text"
                placeholder="Ada Lovelace"
                value={form.name}
                onChange={handleInput}
              />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>I am joining as</label>
                    <select
                        className={styles.select}
                        name="role"
                        value={form.role}
                        onChange={handleInput}
                    >
                        <option value="user">User — here to learn</option>
                        <option value="contributor">Contributor — I want to create content</option>
                        <option value="admin">Admin — I manage the platform</option>
                    </select>
            </div>
            </>
          )}

          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              name="password"
              type="password"
              placeholder={tab === 'signup' ? 'At least 8 characters' : 'Your password'}
              value={form.password}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            {tab === 'login' ? 'Log in →' : 'Create account →'}
          </button>
        </form>

        <p className={styles.footerText}>
          {tab === 'login' ? (
            <>
              No account?{' '}
              <span className={styles.footerTextLink} onClick={() => setTab('signup')}>
                Sign up free
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span className={styles.footerTextLink} onClick={() => setTab('login')}>
                Log in
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}