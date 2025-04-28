import './App.css';
import Theme from './COMPONETES/Theme';
import Counter from './COMPONETES/Counter';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme === 'light' ? 'light_theme' : 'dark_theme'}>
      <div className="container">
        <Theme />
        <Counter />
      </div>
    </div>
  );
}

export default App;
