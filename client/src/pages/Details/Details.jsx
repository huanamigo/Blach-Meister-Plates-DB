import { useParams } from 'react-router-dom';
import styles from './Details.module.scss';

const Details = () => {
  const params = useParams();
  return (
    <div className={styles.container}>
      <h1>{params.details}</h1>
    </div>
  );
};

export default Details;
