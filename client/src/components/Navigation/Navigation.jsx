import NavigationLink from './NavigationLink/NavigationLink';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <NavigationLink name="Województwa" urlName="voivodeship" />
        <NavigationLink name="Powiaty" urlName="county" />
      </div>
      {/* <div className={styles.wrapper}>
        <NavigationLink name="Województwa" urlName="voivodeship" />
        <NavigationLink name="Powiaty" urlName="county" />
      </div> */}
    </div>
  );
};

export default Navigation;
