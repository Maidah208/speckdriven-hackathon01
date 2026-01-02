import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  // Handle theme change
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      className={clsx(styles.themeToggle, {
        [styles.dark]: theme === 'dark',
        [styles.light]: theme === 'light',
      })}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <span className={styles.icon} role="img" aria-label="Dark mode">
          🌙
        </span>
      ) : (
        <span className={styles.icon} role="img" aria-label="Light mode">
          ☀️
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;