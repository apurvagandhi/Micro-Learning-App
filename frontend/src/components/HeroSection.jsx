import styles from '../styles/HeroSection.module.css';
import shared from '../styles/shared.module.css';

const SIDEBAR_ITEMS = [
  { icon: '🏠', label: 'Dashboard', active: true },
  { icon: '📖', label: 'My Lessons', active: false },
  { icon: '🔍', label: 'Explore', active: false },
  { icon: '📊', label: 'Progress', active: false },
  { icon: '🔖', label: 'Bookmarks', active: false },
];

const CARDS = [
  { label: 'Intro to JavaScript', meta: 'Text · 5 min · Beginner', width: '72%', color: '#4ade80', colorClass: 'uiCardGreen' },
  { label: 'UX Design Basics',    meta: 'Text · 8 min · Beginner', width: '40%', color: '#f87171', colorClass: 'uiCardPink' },
  { label: 'Data Structures',     meta: 'Text · 10 min · Intermediate', width: '20%', color: '#fbbf24', colorClass: 'uiCardYellow' },
  { label: 'CSS Grid Mastery',    meta: 'Text · 6 min · Beginner', width: '88%', color: '#a78bfa', colorClass: 'uiCardPurple' },
];

export default function HeroSection({ onSignup, onLogin }) {
  return (
    <section className={styles.hero}>
      {/* Background blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />

      {/* Decorative paper strips */}
      <div className={styles.paperStrip} />
      <div className={styles.paperStrip2} />

      {/* Hero text */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <div className={styles.badgeDot} />
          Open Source
        </div>
        <h1 className={styles.title}>
          Your space for<br /><em>smarter</em> learning,<br />one lesson at a time
        </h1>
        <p className={styles.subtitle}>
          Micro-learning that fits your life. Concise lessons, progress tracking,
          and a distraction-free space to actually grow.
        </p>
        <div className={styles.buttons}>
          <button className={shared.btnPrimary} onClick={onSignup}>
            Start learning free
          </button>
          <button className={shared.btnSecondary} onClick={onLogin}>
            Log in
          </button>
        </div>
      </div>

      {/* UI Preview mockup */}
      <div className={styles.uiPreview}>
        <div className={`${styles.floatChip} ${styles.chip1}`}>
          <span>🔥</span> 7-day streak!
        </div>
        <div className={`${styles.floatChip} ${styles.chip2}`}>
          <span>✅</span> Lesson complete
        </div>
        <div className={`${styles.floatChip} ${styles.chip3}`}>
          <span>📚</span> 3 new lessons
        </div>

        <div className={styles.uiWindow}>
          <div className={styles.uiTitlebar}>
            <div className={styles.dotR} />
            <div className={styles.dotY} />
            <div className={styles.dotG} />
            <span className={styles.uiTab}>MicroLearn — My Dashboard</span>
          </div>

          <div className={styles.uiBody}>
            <div className={styles.uiSidebar}>
              <div className={styles.uiSbHeader}>Workspace</div>
              {SIDEBAR_ITEMS.map(({ icon, label, active }) => (
                <div
                  key={label}
                  className={`${styles.uiSbItem} ${active ? styles.active : ''}`}
                >
                  <span className={styles.uiSbIcon}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>

            <div className={styles.uiMain}>
              <div className={styles.uiMainTitle}>Continue Learning</div>
              <div className={styles.uiCardsGrid}>
                {CARDS.map((card) => (
                  <div
                    key={card.label}
                    className={`${styles.uiCard} ${styles[card.colorClass]}`}
                  >
                    <div className={styles.uiCardLabel}>{card.label}</div>
                    <div className={styles.uiCardMeta}>{card.meta}</div>
                    <div className={styles.uiCardBar}>
                      <div
                        className={styles.uiCardBarFill}
                        style={{ width: card.width, background: card.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}