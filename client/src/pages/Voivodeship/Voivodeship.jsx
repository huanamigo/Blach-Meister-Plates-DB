import NavigationLink from '../../components/Navigation/NavigationLink/NavigationLink';
import styles from './Voivodeship.module.scss';

const Voivodeship = () => {
  return (
    <div className={styles.container}>
      <ul>
        <NavigationLink name="B podlaskie" urlName="podlaskie" />
        <li>B podlaskie</li>
        <li>C kujawsko-pomorskie</li>
        <li>D Dolnośląskie</li>
        <li>E łódzkie</li>
        <li>F lubuskie</li>
        <li>G pomorskie</li>
        <li>K małopolskie</li>
        <li>L lubelskie</li>
        <li>N warmińsko-mazurskie</li>
        <li>O opolskie</li>
        <li>P wielkopolskie</li>
        <li>R podkarpackie</li>
        <li>S śląskie</li>
        <li>T świętokrzyskie</li>
        <li>W mazowieckie</li>
        <li>Z zachodniopomorskie</li>
      </ul>
    </div>
  );
};

export default Voivodeship;
