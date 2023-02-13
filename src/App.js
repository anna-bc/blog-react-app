import logo from './logo.svg';
import './App.scss';
import Header from './container/Header/Header';
import Body from './container/Body/Body';

import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if(!storedTheme) {
      return 'light';
    }

    return storedTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <div className={'blogWrapper' + ' blogWrapper' + (theme === 'light' ? '--light' : '--dark')}>
      <Header theme={theme} setTheme={setTheme} />
      <Body theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
