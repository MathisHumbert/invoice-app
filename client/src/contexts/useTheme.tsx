import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ITheme {
  theme: string | null;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ITheme>({
  theme: null,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const localTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    setTheme(localTheme || 'light');
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!theme) return;

    if (theme === 'light') {
      document.documentElement.className = 'light-theme';
    } else {
      document.documentElement.className = 'dark-theme';
    }

    localStorage.setItem('theme', theme!);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const memoedValue = useMemo(
    () => ({ theme, toggleTheme }),
    // eslint-disable-next-line
    [theme]
  );

  return (
    <ThemeContext.Provider value={memoedValue}>
      {theme && children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
