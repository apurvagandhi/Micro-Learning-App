import styles from '../styles/HowItWorksSection.module.css';
import shared from '../styles/shared.module.css';

const STEPS = [
  {
    n: '1',
    title: 'Create your account',
    desc: 'Sign up and tell us what you want to learn. We\'ll personalize your experience.',
  },
  {
    n: '2',
    title: 'Explore content',
    desc: 'Browse curated lessons by topic, difficulty, or format. Save what catches your eye.',
  },
  {
    n: '3',
    title: 'Learn in minutes',
    desc: 'Dive into bite-sized text, audio, and interactive lessons. No long-form overwhelm.',
  },
  {
    n: '4',
    title: 'Track & grow',
    desc: 'Watch your progress build. Earn completions and keep your learning streak alive.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className={styles.section}>
      <div className={shared.sectionInner}>
        <div className={shared.sectionLabel}>How it works</div>
        <h2 className={shared.sectionTitle}>
          Up and learning<br />in minutes
        </h2>
        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div key={step.n} className={styles.step}>
              <div className={styles.stepNum}>{step.n}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}