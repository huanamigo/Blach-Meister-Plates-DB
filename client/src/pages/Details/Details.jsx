import { useParams } from 'react-router-dom';
import styles from './Details.module.scss';

const Details = () => {
  const params = useParams();
  return (
    <div className={styles.container}>
      <ul>
        <li>{params.details}</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
};

export default Details;
