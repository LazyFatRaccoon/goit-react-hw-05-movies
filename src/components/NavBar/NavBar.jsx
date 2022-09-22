import { Div, P } from 'components/Wrappers/Wrappers';
import { NavItem } from './styled';

const NavBar = () => {
  return (
    <Div display="flex" p={3} boxShadow="md">
      <P mr="4">
        <NavItem to={'/'} end key={'home'}>
          Home
        </NavItem>
      </P>
      <P>
        <NavItem to={'movies'} key={'movies'}>
          Movies
        </NavItem>
      </P>
    </Div>
  );
};

export default NavBar;
