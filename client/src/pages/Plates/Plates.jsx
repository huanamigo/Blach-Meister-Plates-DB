import { useEffect, useState, Fragment } from 'react';
import PlatesLink from './PlatesLink/PlatesLink';
import styles from './Plates.module.scss';

//temp
import plates from '../../plates.json';

const Plates = () => {
  // const [platesId, setPlatesId] = useState([]);

  return (
    <div className={styles.container}>
      {plates.map((plate) => (
        <Fragment key={plate.name}>
          <h1>{plate.name}</h1>
          <div className={styles.wrapper}>
            {plate.items.map((blacha) => (
              <PlatesLink
                key={blacha.plate}
                name={blacha.fullName}
                urlName={blacha.plate}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Plates;
