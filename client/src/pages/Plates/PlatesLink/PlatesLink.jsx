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
        <Link className={styles.link} relative="path" to={urlName[0]}>
          <span>
            <b>
              (
              {urlName.length > 1 ? `${urlName[0]}, ${urlName[1]}` : urlName[0]}
              )
            </b>{' '}
            {name}
          </span>
        </Link>
      )}
    </>
  );
};

export default PlatesLink;
