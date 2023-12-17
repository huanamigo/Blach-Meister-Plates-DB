import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import styles from './styles/App.module.scss';
import Details from './pages/Details/Details';
import Voivodeship from './pages/Voivodeship/Voivodeship';
import County from './pages/County/County';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
        <Route path="voivodeship" element={<Voivodeship />} />
        <Route path="voivodeship/:details" element={<Details />} />
        <Route path="county" element={<County />} />
        <Route path="county/:details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
