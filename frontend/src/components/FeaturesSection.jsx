import styles from '../styles/FeaturesSection.module.css';
import shared from '../styles/shared.module.css';

const FEATURES = [
  {
    icon: '📖',
    title: 'Bite-Sized Lessons',
    desc: 'Learn in focused 5–10 minute sessions designed to fit into your day without overwhelming you.',
    bg: '#f0f7ff',
  },
  {
    icon: '🎯',
    title: 'Track Your Progress',
    desc: 'Visual dashboards show your streaks, completions, and time invested in learning.',
    bg: '#f0fff4',
  },
  {
    icon: '🔍',
    title: 'Smart Search & Filter',
    desc: 'Find exactly what you need by topic, difficulty, content type, or estimated time.',
    bg: '#fff7f0',
  },
  /* 
  {
    icon: '✍️',
    title: 'Interactive Practice',
    desc: 'Reinforce knowledge with quizzes, writing prompts, and exercises after each lesson.',
    bg: '#f5f0ff',
  }, */
];

export default function FeaturesSection() {
  return (
    <section id="features" className={styles.section}>
      <div className={shared.sectionInner}>
        <div className={shared.sectionLabel}>Why MicroLearn</div>
        <h2 className={shared.sectionTitle}>
          Everything you need<br />to learn, nothing you don't
        </h2>
        <p className={shared.sectionSub}>
          Focused, thoughtfully designed tools to help you build knowledge
          consistently — without the fluff.
        </p>
        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.card} style={{ background: f.bg }}>
              <div className={styles.icon}>{f.icon}</div>
              <div className={styles.title}>{f.title}</div>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}