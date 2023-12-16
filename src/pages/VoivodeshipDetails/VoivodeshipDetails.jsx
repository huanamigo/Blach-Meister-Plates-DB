import { useParams } from 'react-router-dom';
import styles from './VoivodeshipDetails.module.scss';

const VoivodeshipDetails = () => {
  const params = useParams();
  return (
    <div className={styles.container}>
      <ul>
        <li>{params.voivodeshipName}</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
};

export default VoivodeshipDetails;
