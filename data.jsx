import React, { useState } from 'react';

const theme = {
  colors: {
    background: '#f0f2f5',
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    gray: '#6c757d',
    transparent: 'transparent',
  },
  fonts: {
    main: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  spacing: {
    small: '8px',
    medium: '12px',
    large: '20px',
    xLarge: '30px',
  },
  radii: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  shadows: {
    subtle: '0 1px 3px rgba(0,0,0,0.05)',
    medium: '0 4px 10px rgba(0,0,0,0.2)',
    large: '0 4px 15px rgba(0,0,0,0.1)',
  },
};

const styles = {
  app: {
    maxWidth: '420px',
    margin: '0 auto',
    padding: theme.spacing.large,
    fontFamily: theme.fonts.main,
    backgroundColor: theme.colors.background,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  authContainer: {
    width: '100%',
    backgroundColor: theme.colors.white,
    padding: theme.spacing.large,
    borderRadius: theme.radii.large,
    boxShadow: theme.shadows.medium,
    marginBottom: theme.spacing.large,
  },

  authHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    borderBottom: `2px solid ${theme.colors.gray}`,
  },

  greeting: {
    margin: 0,
    fontSize: '1.5em',
    color: theme.colors.dark,
  },

  logoutBtn: {
    padding: `${theme.spacing.small} ${theme.spacing.medium}`,
    backgroundColor: theme.colors.danger,
    color: theme.colors.white,
    border: 'none',
    borderRadius: theme.radii.medium,
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '14px',
    boxShadow: theme.shadows.subtle,
    transition: 'background-color 0.3s',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  formGroup: {
    marginBottom: theme.spacing.medium,
  },

  input: {
    width: '100%',
    padding: theme.spacing.medium,
    border: `2px solid ${theme.colors.gray}`,
    borderRadius: theme.radii.medium,
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },

  inputFocus: {
    borderColor: theme.colors.primary,
    boxShadow: `0 0 8px rgba(0, 123, 255, 0.3)`,
  },

  button: {
    width: '100%',
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    border: 'none',
    borderRadius: theme.radii.medium,
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: theme.shadows.medium,
    transition: 'background-color 0.3s',
  },

  error: {
    color: theme.colors.danger,
    fontSize: '13px',
    marginTop: theme.spacing.small,
  },

  userList: {
    width: '100%',
    maxWidth: '600px',
    margin: `${theme.spacing.large} auto`,
    padding: theme.spacing.large,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.large,
    boxShadow: theme.shadows.medium,
  },

  userItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.small,
    borderRadius: theme.radii.medium,
    backgroundColor: theme.colors.light,
    boxShadow: theme.shadows.subtle,
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',
  },

  deleteBtn: {
    backgroundColor: theme.colors.danger,
    color: theme.colors.white,
    border: 'none',
    padding: `${theme.spacing.small} ${theme.spacing.medium}`,
    borderRadius: theme.radii.medium,
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600,
    boxShadow: theme.shadows.subtle,
    transition: 'background-color 0.3s',
  },
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  const handleLogin = () => {
    if (login.trim() && password.trim()) {
      setUserName(login);
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Пожалуйста, введите логин и пароль');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLogin('');
    setPassword('');
    setError('');
  };

  const handleAddUser = () => {
    if (login.trim() && password.trim()) {
      const newUser = { id: Date.now(), name: login, email: 'test@example.com' };
      setUsers([...users, newUser]);
      setLogin('');
      setPassword('');
      setError('');
    } else {
      setError('Пожалуйста, введите логин и пароль');
    }
  };

  const handleRemoveUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const inputStyle = (fieldName) => ({
    ...styles.input,
    ...(focusedInput === fieldName ? styles.inputFocus : {}),
  });

  return (
    <div style={styles.app}>
      {!isAuthenticated ? (
        <div style={styles.authContainer}>
          <div style={styles.authHeader}>
            <h2 style={styles.greeting}>Авторизация</h2>
          </div>
          <form
            style={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div style={styles.formGroup}>
              <input
                style={inputStyle('login')}
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                onFocus={() => setFocusedInput('login')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                style={inputStyle('password')}
                placeholder="Пароль"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
            {error && <div style={styles.error}>{error}</div>}
            <button style={styles.button} type="submit">
              Войти
            </button>
          </form>
        </div>
      ) : (
        <>
          <div style={styles.authContainer}>
            <div style={styles.authHeader}>
              <h2 style={styles.greeting}>Здравствуйте, {userName}!</h2>
              <button style={styles.logoutBtn} onClick={handleLogout}>
                Выйти
              </button>
            </div>
            {/* Добавление пользователя */}
            <div style={{ marginBottom: theme.spacing.large }}>
              <h3 style={{ marginBottom: theme.spacing.medium, color: theme.colors.dark }}>Добавить пользователя</h3>
              <input
                style={inputStyle('newUser')}
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                onFocus={() => setFocusedInput('newUser')}
                onBlur={() => setFocusedInput(null)}
              />
              <button style={{ ...styles.button, marginTop: theme.spacing.medium }} onClick={handleAddUser}>
                Добавить
              </button>
            </div>
          </div>

          {/* Список пользователей */}
          {users.length > 0 && (
            <div style={styles.userList}>
              <h3 style={{ marginBottom: theme.spacing.medium, color: theme.colors.gray }}>Пользователи</h3>
              {users.map((user) => (
                <div key={user.id} style={styles.userItem}>
                  <div style={styles.userInfo}>
                    <strong style={{ fontSize: '1.1em', color: theme.colors.dark }}>{user.name}</strong>
                    <span style={{ fontSize: '0.9em', color: theme.colors.secondary }}>{user.email}</span>
                  </div>
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleRemoveUser(user.id)}
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;