import React, { useState } from 'react';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    height: '100vh',
  },
  paragraph: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  magicalButton: {
    padding: '10px 20px',
    fontSize: 16,
    color: 'white',
    backgroundColor: '#9adada',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: 20,
  },
  magicalButtonHover: {
    backgroundColor: '#59b1b1',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'rgb(197, 99, 164)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontSize: 20,
    color: '#333',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    marginBottom: 20,
    cursor: 'pointer',
    userSelect: 'none',
  },
  boxHover: {
    transform: 'scale(1.05)',
  },
  clickCount: {
    fontSize: 20,
    color: '#333',
  },
};

export default function MagicalButton() {
  const [isColorChanged, setIsColorChanged] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isBoxHovered, setIsBoxHovered] = useState(false);

  const toggleBox = () => {
    setIsColorChanged(!isColorChanged);
    setClickCount(clickCount + 1);
  };

  const openLink = () => {
    window.open('https://t.me/mirocakestomsk', '_blank', 'noopener');
  };

  return (
    <div style={styles.body}>
      <p style={styles.paragraph}>Магическая кнопка</p>

      <button
        style={{
          ...styles.magicalButton,
          ...(isButtonHovered ? styles.magicalButtonHover : {}),
        }}
        onClick={toggleBox}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        Хочешь тортик?
      </button>

      <div
        onClick={openLink}
        style={{
          ...styles.box,
          backgroundColor: isColorChanged ? 'rgb(252, 161, 222)' : 'rgb(197, 99, 164)',
          ...(isBoxHovered ? styles.boxHover : {}),
        }}
        onMouseEnter={() => setIsBoxHovered(true)}
        onMouseLeave={() => setIsBoxHovered(false)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') openLink();
        }}
      >
        {isColorChanged ? 'tg: @mirocakestomsk' : 'Подпишись'}
      </div>

      <div style={styles.clickCount}>Нажатий: {clickCount}</div>
    </div>
  );
}
