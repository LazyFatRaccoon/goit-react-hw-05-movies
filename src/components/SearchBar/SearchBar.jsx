import { Div,P } from 'components/Wrappers/Wrappers';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types'

const SearchBar = ({ onSubmitFilter, query }) => {
  
  return (
    <Div m="4" fontSize='m'>
      <Formik
        initialValues={{ search: query }}
        
        onSubmit={(values, { resetForm }) => {
          onSubmitFilter(values.search);
          //resetForm();
        }}
        
      >
        <Form>
          <Field   style={{ fontSize: "2rem" }}  name="search" type="text" required autoComplete='off' />
          <ErrorMessage name="firstName" />
          <P fontSize='l' m='1' as='button' type="submit">Search</P>
        </Form>
      </Formik>
    </Div>
  );
};

SearchBar.propTypes = {
    onSubmitFilter: PropTypes.func.isRequired,
}

export default SearchBar;
