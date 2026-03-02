import { useState } from 'react';
import styles from '../styles/AdminDashboard.module.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <h1>Admin Panel</h1>
        <p>Manage platform settings, users, and analytics</p>
      </header>

      <nav className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'analytics' ? styles.active : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          📊 Analytics & Reporting
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'users' ? styles.active : ''}`}
          onClick={() => setActiveTab('users')}
        >
          👥 User Management
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'config' ? styles.active : ''}`}
          onClick={() => setActiveTab('config')}
        >
          ⚙️ Configuration
        </button>
      </nav>

      <main className={styles.content}>
        {activeTab === 'analytics' && <AnalyticsSection />}
        {activeTab === 'users' && <UserManagementSection />}
        {activeTab === 'config' && <ConfigurationSection />}
      </main>
    </div>
  );
}

function AnalyticsSection() {
  return (
    <div className={styles.section}>
      <h2>Analytics & Reporting</h2>
      <p className={styles.subtitle}>Overview of platform usage and content</p>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>👤</div>
          <div className={styles.statInfo}>
            <h3>Total Users</h3>
            <p className={styles.statNumber}>-</p>
            <span className={styles.statLabel}>Active users on platform</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>📝</div>
          <div className={styles.statInfo}>
            <h3>Text Content</h3>
            <p className={styles.statNumber}>-</p>
            <span className={styles.statLabel}>Total text lessons</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🎨</div>
          <div className={styles.statInfo}>
            <h3>Visual Content</h3>
            <p className={styles.statNumber}>-</p>
            <span className={styles.statLabel}>Total visual lessons</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🎧</div>
          <div className={styles.statInfo}>
            <h3>Audio Content</h3>
            <p className={styles.statNumber}>-</p>
            <span className={styles.statLabel}>Total audio lessons</span>
          </div>
        </div>
      </div>

      <div className={styles.tableSection}>
        <h3>User Activity Summary</h3>
        <p className={styles.tableSubtitle}>Who's using it and what they've created</p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Content Created</th>
              <th>Last Active</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.emptyRow}>
              <td colSpan="5">No user activity data yet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UserManagementSection() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <div>
          <h2>User Management</h2>
          <p className={styles.subtitle}>Create, edit, and manage user accounts</p>
        </div>
        <button className={styles.primaryButton}>+ Create New User</button>
      </div>

      <div className={styles.tableSection}>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search users by name or email..." 
            className={styles.searchInput}
            aria-label="Search users by name or email"
          />
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.emptyRow}>
              <td colSpan="6">No users to display</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ConfigurationSection() {
  return (
    <div className={styles.section}>
      <h2>Configuration Settings</h2>
      <p className={styles.subtitle}>Manage platform-wide settings and content limits</p>

      <div className={styles.configCard}>
        <h3>📝 Text Content Limits</h3>
        <p className={styles.configDescription}>Set character and word count limits for text-based lessons</p>
        
        <div className={styles.configForm}>
          <div className={styles.formGroup}>
            <label htmlFor="charLimit">Maximum Character Count</label>
            <input 
              type="number" 
              id="charLimit" 
              placeholder="e.g., 5000"
              className={styles.configInput}
            />
            <span className={styles.helpText}>Maximum characters allowed per text lesson</span>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="wordLimit">Maximum Word Count</label>
            <input 
              type="number" 
              id="wordLimit" 
              placeholder="e.g., 1000"
              className={styles.configInput}
            />
            <span className={styles.helpText}>Maximum words allowed per text lesson</span>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="minLength">Minimum Character Count</label>
            <input 
              type="number" 
              id="minLength" 
              placeholder="e.g., 50"
              className={styles.configInput}
            />
            <span className={styles.helpText}>Minimum characters required for a valid lesson</span>
          </div>
        </div>

        <button className={styles.saveButton}>Save Configuration</button>
      </div>

      <div className={styles.configCard}>
        <h3>📊 Current Settings Overview</h3>
        <div className={styles.settingsList}>
          <div className={styles.settingItem}>
            <span className={styles.settingLabel}>Max Characters:</span>
            <span className={styles.settingValue}>Not configured</span>
          </div>
          <div className={styles.settingItem}>
            <span className={styles.settingLabel}>Max Words:</span>
            <span className={styles.settingValue}>Not configured</span>
          </div>
          <div className={styles.settingItem}>
            <span className={styles.settingLabel}>Min Characters:</span>
            <span className={styles.settingValue}>Not configured</span>
          </div>
        </div>
      </div>
    </div>
  );
}