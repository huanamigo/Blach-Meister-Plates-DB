import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
