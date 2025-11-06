import React from 'react';

interface ThemeToggleProps {
  theme: string;
  onToggle: () => void;
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button onClick={onToggle} className="theme-toggle">
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default ThemeToggle;