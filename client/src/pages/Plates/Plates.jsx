import NavigationLink from '../../components/Navigation/NavigationLink/NavigationLink';
import styles from './Plates.module.scss';

const Plates = () => {
  return (
    <div className={styles.container}>
      <NavigationLink name="Powiat Żywiecki" urlName="SZY" />
      <NavigationLink name="Powiat Bielski" urlName="SBI" />
      <NavigationLink name="Powiat Łańcucki" urlName="RLA" />
    </div>
  );
};

export default Plates;
