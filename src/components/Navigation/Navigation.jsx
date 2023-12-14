import NavigationLink from './NavigationLink/NavigationLink';

const Navigation = () => {
  return (
    <div>
      <NavigationLink name="Województwo" urlName="voivodeship" />
      <NavigationLink name="Powiat" urlName="county" />
    </div>
  );
};

export default Navigation;
