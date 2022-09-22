import { Div, P } from 'components/Wrappers/Wrappers';
import { StyledInfoLink } from 'components/commonStyled';

const AdditionalInfo = () => {
  return (
    <Div borderBottom="1px solid" borderTop="1px solid">
      <P mx="4" fontSize="m">
        Additional information
      </P>
      <ul>
        <li>
          <StyledInfoLink to="cast">Cast</StyledInfoLink>
        </li>
        <li>
          <StyledInfoLink to="reviews">Reviews</StyledInfoLink>
        </li>
      </ul>
    </Div>
  );
};

export default AdditionalInfo;
