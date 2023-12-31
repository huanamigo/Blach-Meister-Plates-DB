import NavigationLink from '../../components/Navigation/NavigationLink/NavigationLink';
import styles from './Plates.module.scss';

//temp
import data from '../../data.json';
import { useEffect, useState } from 'react';

const Plates = () => {
  const [platesId, setPlatesId] = useState([]);

  useEffect(() => {
    let temp = [];
    data.map((post) => {
      if (!temp.includes(post.name)) {
        temp.push({
          key: post.id,
          name: post.name,
          url: post.plate,
        });
      }
    });
    setPlatesId(temp);
  }, []);
  return (
    <div className={styles.container}>
      {platesId.map((plate) => (
        <Plates key={plate.key} name={plate.name} urlName={plate.url} />
      ))}
    </div>
  );
};

export default Plates;
