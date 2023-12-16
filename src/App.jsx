import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import styles from './styles/App.module.scss';
import VoivodeshipDetails from './pages/VoivodeshipDetails/VoivodeshipDetails';
import Voivodeship from './pages/Voivodeship/Voivodeship';
import County from './pages/County/County';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
        <Route path="voivodeship" element={<Voivodeship />} />
        <Route
          path="voivodeship/:voivodeshipName"
          element={<VoivodeshipDetails />}
        />
        <Route path="county" element={<County />} />
      </Routes>
    </div>
  );
}

export default App;
