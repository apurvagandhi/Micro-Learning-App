import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import styles from '../styles/AdminDashboard.module.css';

//Mock Data
const INITIAL_USERS = [
  { id: 1, username: 'jane_admin',   email: 'jane@gmail.com',  role: 'admin',       status: 'active',   created: '2025-01-10' },
  { id: 2, username: 'mark_contrib', email: 'mark@yahoo.com',  role: 'contributor', status: 'active',   created: '2025-02-03' },
  { id: 3, username: 'sara_user',    email: 'sara@example.com',  role: 'user',        status: 'active',   created: '2025-02-14' },
  { id: 4, username: 'old_account',  email: 'old@example.com',   role: 'user',        status: 'inactive', created: '2024-11-01' },
  { id: 5, username: 'hazel_espi',  email: 'hazel@gmail.com',   role: 'user',        status: 'active', created: '2026-01-08' },
];

const CONTENT_STATS = [
  { icon: '👤', label: 'Total Users',    count: 5,  sub: 'Registered accounts'  },
  { icon: '📝', label: 'Text Content',   count: 24, sub: 'Total text lessons'   },
  { icon: '🎨', label: 'Visual Content', count: 11, sub: 'Total visual lessons' },
  { icon: '🎧', label: 'Audio Content',  count: 7,  sub: 'Total audio lessons'  },
];

const ACTIVITY_ROWS = [
  { user: 'jane_admin',   email: 'jane@example.com',  role: 'admin',       created: 2, lastActive: 'Today'      },
  { user: 'mark_contrib', email: 'mark@example.com',  role: 'contributor', created: 8, lastActive: 'Yesterday'  },
  { user: 'sara_user',    email: 'sara@example.com',  role: 'user',        created: 0, lastActive: '3 days ago' },
  { user: 'hazel_espi',    email: 'hazel@gmail.com',  role: 'user',        created: 0, lastActive: '2 days ago' },
];

const EMPTY_FORM = { username: '', email: '', role: 'user', status: 'active', password: '' };


export default function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1>Admin Panel</h1>
            <p>Manage platform settings, users, and analytics</p>
          </div>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </header>

      <nav className={styles.tabs}>
        {[
          { id: 'analytics', label: '📊 Analytics & Reporting' },
          { id: 'users',     label: '👥 User Management'       },
          { id: 'config',    label: '⚙️ Configuration'         },
        ].map(({ id, label }) => (
          <button
            key={id}
            className={`${styles.tab} ${activeTab === id ? styles.active : ''}`}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </button>
        ))}
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
      <p className={styles.subtitle}>Overview of platform usage & content</p>

      <div className={styles.statsGrid}>
        {CONTENT_STATS.map(({ icon, label, count, sub }) => (
          <div key={label} className={styles.statCard}>
            <div className={styles.statIcon}>{icon}</div>
            <div className={styles.statInfo}>
              <h3>{label}</h3>
              <p className={styles.statNumber}>{count}</p>
              <span className={styles.statLabel}>{sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.tableSection}>
        <h3>User Activity Summary</h3>
        <p className={styles.tableSubtitle}>Who's using the platform and what they've created</p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th><th>Email</th><th>Role</th><th>Content Created</th><th>Last Active</th>
            </tr>
          </thead>
          <tbody>
            {ACTIVITY_ROWS.map((row) => (
              <tr key={row.user}>
                <td><strong>{row.user}</strong></td>
                <td>{row.email}</td>
                <td><RoleBadge role={row.role} /></td>
                <td>{row.created}</td>
                <td>{row.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UserManagementSection() {
  const [users, setUsers]         = useState(INITIAL_USERS);
  const [search, setSearch]       = useState('');
  const [modal, setModal]         = useState(null);
  const [form, setForm]           = useState(EMPTY_FORM);
  const [toast, setToast]         = useState(null);
  const [confirmId, setConfirmId] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const openCreate = () => { setForm(EMPTY_FORM); setModal({ mode: 'create' }); };
  const openEdit   = (user) => { setForm({ ...user, password: '' }); setModal({ mode: 'edit', user }); };
  const closeModal = () => setModal(null);

  const handleFormChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSave = () => {
    if (!form.username.trim() || !form.email.trim()) {
      showToast('Username and email are required.', 'error'); return;
    }
    if (modal.mode === 'create') {
      setUsers(u => [...u, { ...form, id: Date.now(), created: new Date().toISOString().slice(0, 10) }]);
      showToast(`User "${form.username}" created successfully.`);
    } else {
      setUsers(u => u.map(u => u.id === modal.user.id ? { ...u, ...form } : u));
      showToast(`User "${form.username}" updated successfully.`);
    }
    closeModal();
  };

  const toggleStatus = (id) => {
    const user = users.find(u => u.id === id);
    const next = user.status === 'active' ? 'inactive' : 'active';
    setUsers(u => u.map(u => u.id === id ? { ...u, status: next } : u));
    showToast(`User ${next === 'inactive' ? 'deactivated' : 'reactivated'} successfully.`);
    setConfirmId(null);
  };

  const filtered = users.filter(u =>
    u.username.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const pendingUser = confirmId ? users.find(u => u.id === confirmId) : null;

  return (
    <div className={styles.section}>
      {toast && <Toast msg={toast.msg} type={toast.type} />}
      <div className={styles.sectionHeader}>
        <div>
          <h2>User Management</h2>
          <p className={styles.subtitle}>Create, edit, and manage user accounts</p>
        </div>
        <button className={styles.primaryButton} onClick={openCreate}>+ Create New User</button>
      </div>

      <div className={styles.tableSection}>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search users by name or email..." 
            className={styles.searchInput}
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search users"
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
            {filtered.length === 0 ? (
              <tr className={styles.emptyRow}><td colSpan="6">No users found</td></tr>
            ) : filtered.map(user => (
              <tr key={user.id}>
                <td><strong>{user.username}</strong></td>
                <td>{user.email}</td>
                <td><RoleBadge role={user.role} /></td>
                <td><StatusBadge status={user.status} /></td>
                <td>{user.created}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.editBtn} onClick={() => openEdit(user)}>Edit</button>
                    <button
                      className={user.status === 'active' ? styles.deactivateBtn : styles.activateBtn}
                      onClick={() => setConfirmId(user.id)}
                    >
                      {user.status === 'active' ? 'Deactivate' : 'Reactivate'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {confirmId && pendingUser && (
        <Modal title="Confirm Action" onClose={() => setConfirmId(null)}>
          <p className={styles.confirmText}>
            Are you sure you want to{' '}
            <strong>{pendingUser.status === 'active' ? 'deactivate' : 'reactivate'}</strong>{' '}
            <strong>{pendingUser.username}</strong>?
          </p>
          <div className={styles.modalFooter}>
            <button className={styles.cancelBtn} onClick={() => setConfirmId(null)}>Cancel</button>
            <button className={styles.primaryButton} onClick={() => toggleStatus(confirmId)}>Confirm</button>
          </div>
        </Modal>
      )}

      {modal && (
        <Modal
          title={modal.mode === 'create' ? 'Create New User' : `Edit — ${modal.user.username}`}
          onClose={closeModal}
        >
          <div className={styles.configForm}>
            <div className={styles.formGroup}>
              <label>Username *</label>
              <input name="username" className={styles.configInput} value={form.username} onChange={handleFormChange} placeholder="e.g. john_doe" />
            </div>
            <div className={styles.formGroup}>
              <label>Email *</label>
              <input name="email" type="email" className={styles.configInput} value={form.email} onChange={handleFormChange} placeholder="e.g. john@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label>Role</label>
              <select name="role" className={styles.configInput} value={form.role} onChange={handleFormChange}>
                <option value="user">User</option>
                <option value="contributor">Contributor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Status</label>
              <select name="status" className={styles.configInput} value={form.status} onChange={handleFormChange}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>{modal.mode === 'create' ? 'Password *' : 'New Password (leave blank to keep)'}</label>
              <input name="password" type="password" className={styles.configInput} value={form.password} onChange={handleFormChange} placeholder="••••••••" />
            </div>
          </div>
          <div className={styles.modalFooter}>
            <button className={styles.cancelBtn} onClick={closeModal}>Cancel</button>
            <button className={styles.saveButton} onClick={handleSave}>
              {modal.mode === 'create' ? 'Create User' : 'Save Changes'}
            </button>
          </div>
        </Modal>
      )}

    </div>
  );
}

function ConfigurationSection() {
  const [saved, setSaved] = useState({ charLimit: '', wordLimit: '', minLength: '' });
  const [form,  setForm]  = useState({ charLimit: '', wordLimit: '', minLength: '' });
  const [toast, setToast] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSave = () => {
    if (form.charLimit && form.minLength && Number(form.charLimit) <= Number(form.minLength)) {
      alert('Max character count must be greater than the minimum.'); return;
    }
    setSaved({ ...form });
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const display = (val) => val ? Number(val).toLocaleString() : 'Not configured';


  return (
    <div className={styles.section}>
      {toast && <Toast msg="Configuration saved successfully!" type="success" />}

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
              name="charLimit" 
              placeholder="e.g., 5000"
              className={styles.configInput}
              value={form.charLimit}
              onChange={handleChange}
              min="1"
            />
            <span className={styles.helpText}>Maximum characters allowed per text lesson</span>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="wordLimit">Maximum Word Count</label>
            <input 
              type="number" 
              id="wordLimit" 
              name="wordLimit"
              placeholder="e.g., 1000"
              className={styles.configInput}
              value={form.wordLimit} 
              onChange={handleChange} 
              min="1"
            />
            <span className={styles.helpText}>Maximum words allowed per text lesson</span>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="minLength">Minimum Character Count</label>
            <input 
              type="number" 
              id="minLength" 
              name="minLength"
              placeholder="e.g., 50"
              className={styles.configInput}
              value={form.minLength} 
              onChange={handleChange} 
              min="1"
            />
            <span className={styles.helpText}>Minimum characters required for a valid lesson</span>
          </div>
        </div>

        <button className={styles.saveButton} onClick={handleSave}>Save Configuration</button>
      </div>

      <div className={styles.configCard}>
        <h3>📊 Current Settings Overview</h3>
        <div className={styles.settingsList}>
          {[
            { label: 'Max Characters', value: display(saved.charLimit) },
            { label: 'Max Words',      value: display(saved.wordLimit) },
            { label: 'Min Characters', value: display(saved.minLength) },
          ].map(({ label, value }) => (
            <div key={label} className={styles.settingItem}>
              <span className={styles.settingLabel}>{label}:</span>
              <span className={styles.settingValue}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//Shared UI Helpers
function Modal({ title, onClose, children }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>{title}</h3>
          <button className={styles.modalClose} onClick={onClose}>✕</button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}

function Toast({ msg, type }) {
  return <div className={`${styles.toast} ${styles[`toast_${type}`]}`}>{msg}</div>;
}

function RoleBadge({ role }) {
  const map = { admin: styles.badgeAdmin, contributor: styles.badgeContrib, user: styles.badgeUser };
  return <span className={`${styles.badge} ${map[role] ?? ''}`}>{role}</span>;
}

function StatusBadge({ status }) {
  return (
    <span className={`${styles.badge} ${status === 'active' ? styles.badgeActive : styles.badgeInactive}`}>
      {status}
    </span>
  );
}