import { NavLink } from 'react-router-dom';
import styles from './NavigationLink.module.scss';
import { Fragment } from 'react';

const NavigationLink = ({ name, urlName }) => {
  return (
    <Fragment className={styles.wrapper}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
        to={urlName}
      >
        {name}
      </NavLink>
    </Fragment>
  );
};

export default NavigationLink;
