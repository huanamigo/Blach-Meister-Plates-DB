import { Link } from 'react-router-dom';
import styles from './PlatesLink.module.scss';

const PlatesLink = ({ name, urlName }) => {
  return (
    <Link className={styles.link} relative="path" to={urlName}>
      {name}
    </Link>
  );
};

export default PlatesLink;
