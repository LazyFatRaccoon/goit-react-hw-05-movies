import { Div, P } from 'components/Wrappers/Wrappers';
import { BackLink } from '../components/commonStyled';

const PageNotFound = () => {
  return (
    <Div>
      <Div m="4">
        <BackLink to={'/'}> Go main </BackLink>
      </Div>
      <P fontSize="l" mx="4">
        Page Not found
      </P>
    </Div>
  );
};

export default PageNotFound;
