import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import styles from './styles/App.module.scss';
import Details from './pages/Details/Details';
import Feed from './pages/Feed/Feed';
import Plates from './pages/Plates/Plates';
import User from './pages/User/User';
import ResetToTop from './components/ResetToTop/ResetToTop';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="plates" element={<Plates />} />
        <Route path="plates/:details" element={<Details />} />
        <Route path="user/:username" element={<User />} />
      </Routes>
      <ResetToTop />
    </div>
  );
}

export default App;
