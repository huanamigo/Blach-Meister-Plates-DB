import { useEffect, useState } from 'react';
import PlatesLink from './PlatesLink/PlatesLink';
import styles from './Plates.module.scss';

//temp
import data from '../../data.json';

const Plates = () => {
  const [platesId, setPlatesId] = useState([]);

  useEffect(() => {
    let temp = [];
    data.map((post) => {
      console.log('first');
      if (!temp.includes(post.name)) {
        temp.push({
          key: post.id,
          name: post.name,
          url: post.plate,
        });
      }
    });
    setPlatesId(temp);
  }, [data]);

  return (
    <div className={styles.container}>
      {platesId.map((plate) => (
        <PlatesLink key={plate.key} name={plate.name} urlName={plate.url} />
      ))}
    </div>
  );
};

export default Plates;
