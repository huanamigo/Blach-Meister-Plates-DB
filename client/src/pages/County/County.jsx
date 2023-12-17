import NavigationLink from '../../components/Navigation/NavigationLink/NavigationLink';
import styles from './County.module.scss';

const County = () => {
  return (
    <div className={styles.container}>
      <ul>
        <NavigationLink name="Powiat Żywiecki" urlName="SZY" />
        <li>powiat jeden</li>
      </ul>
    </div>
  );
};

export default County;
