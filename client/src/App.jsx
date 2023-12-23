import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import styles from './styles/App.module.scss';
import Details from './pages/Details/Details';
import Voivodeship from './pages/Voivodeship/Voivodeship';
import County from './pages/County/County';
import Feed from './pages/Feed/Feed';
import Plates from './pages/Plates/Plates';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="plates" element={<Plates />} />
        <Route path="plates/:details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
