import { NavLink } from 'react-router-dom';
import styles from './NavigationLink.module.scss';

const NavigationLink = ({ name, urlName }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
      to={urlName}
    >
      {name}
    </NavLink>
  );
};

export default NavigationLink;
