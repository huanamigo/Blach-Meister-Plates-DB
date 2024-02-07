import { Link } from 'react-router-dom';
import styles from './PlatesLink.module.scss';

const PlatesLink = ({ name, urlName, isUser }) => {
  return (
    <>
      {isUser ? (
        <Link className={styles.link} relative="path" to={urlName}>
          {name}
        </Link>
      ) : (
        <Link className={styles.link} relative="path" to={urlName}>
          {name} ({urlName})
        </Link>
      )}
    </>
  );
};

export default PlatesLink;
