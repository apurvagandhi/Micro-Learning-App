import { useState } from 'react';
import styles from '../styles/UserDashboard.module.css';

export default function UserDashboard() {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.dashboard}>
      <h1>User Dashboard</h1>

      <div className={styles.search}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search available content..."
        />
      </div>

      <section className={styles.section}>
        <h2>Browse Content</h2>
        <div className={styles.cardGrid}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={styles.card}>
              <strong>Course {i}</strong>
              <p>Short description of content.</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Bookmarks</h2>
        <p>(Bookmarked items will show here.)</p>
      </section>

      <section className={styles.section}>
        <h2>Recommended for You</h2>
        <div className={styles.cardGrid}>
          {[1, 2, 3].map(i => (
            <div key={i} className={styles.card}>
              <strong>Recommended {i}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Learning Progress</h2>
        <div className={styles.progressBar}>
          <div />
        </div>
        <p>50% complete (visual placeholder)</p>
      </section>

      <section className={styles.section}>
        <h2>Completion History</h2>
        <p>Completed modules will appear here when implemented.</p>
      </section>
    </div>
  );
}