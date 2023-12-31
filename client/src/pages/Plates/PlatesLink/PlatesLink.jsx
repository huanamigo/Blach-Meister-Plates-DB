import { Link } from 'react-router-dom';
import styles from './PlatesLink.module.scss';

const NavigationLink = ({ name, urlName }) => {
  return (
    <Link className={styles.link} to={urlName}>
      {name}
    </Link>
  );
};

export default NavigationLink;
