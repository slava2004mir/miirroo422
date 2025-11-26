import React, { useState } from 'react';

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0069d9',
  },
  switchLink: {
    display: 'block',
    marginTop: '15px',
    textAlign: 'center',
    fontSize: '14px',
  },
  switchText: {
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

const LoginForm = ({ onSwitchToRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container} className="auth-form">
      <h2 style={styles.formTitle}>Вход</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email:</label>
        <input type="email" required style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Пароль:</label>
        <input type="password" required style={styles.input} />
      </div>
      <button type="submit" style={styles.button}>Войти</button>
      <div style={styles.switchLink}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onSwitchToRegister(); }}
          style={styles.switchText}
        >
          Нет аккаунта? Зарегистрироваться
        </a>
      </div>
    </form>
  );
};

const RegistrationForm = ({ onSwitchToLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container} className="auth-form">
      <h2 style={styles.formTitle}>Регистрация</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Имя:</label>
        <input type="text" required style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email:</label>
        <input type="email" required style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Пароль:</label>
        <input type="password" required style={styles.input} />
      </div>
      <button type="submit" style={styles.button}>Зарегистрироваться</button>
      <div style={styles.switchLink}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onSwitchToLogin(); }}
          style={styles.switchText}
        >
          Уже есть аккаунт? Войти
        </a>
      </div>
    </form>
  );
};

const AuthSwitcher = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const switchToRegister = () => {
    setIsLoginView(false);
  };

  const switchToLogin = () => {
    setIsLoginView(true);
  };

  return (
    <div style={styles.container}>
      {isLoginView ? (
        <LoginForm onSwitchToRegister={switchToRegister} />
      ) : (
        <RegistrationForm onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
};

export default AuthSwitcher;