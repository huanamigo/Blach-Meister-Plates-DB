import NavigationLink from './NavigationLink/NavigationLink';
import styles from './Navigation.module.scss';
import AddButton from '../AddButton/AddButton';

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <NavigationLink name="For you" urlName="/" />
        <NavigationLink name="Plates" urlName="/plates" />
        {/* <button className={styles.addBtn}>ADD NEW</button> */}
        <AddButton />
      </div>
    </div>
  );
};

export default Navigation;
