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
          name: post.name,
          url: post.plate,
        });
      }
    });
    console.log(temp);
    setPlatesId(temp);
  }, []);
  return (
    <div className={styles.container}>
      {platesId.map((plate) => (
        <NavigationLink name={plate.name} urlName={plate.url} />
      ))}
    </div>
  );
};

export default Plates;
