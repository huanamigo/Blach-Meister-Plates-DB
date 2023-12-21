import NavigationLink from '../../components/Navigation/NavigationLink/NavigationLink';
import styles from './Plates.module.scss';

const Plates = () => {
  return (
    <div className={styles.container}>
      <ul>
        <p>śląsk</p>
        <NavigationLink name="Powiat Żywiecki" urlName="SZY" />
        <li>powiat jeden</li>
      </ul>
    </div>
  );
};

export default Plates;
