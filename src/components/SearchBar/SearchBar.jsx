import { Div } from "components/Wrappers/Wrappers" 
import { Formik, Field, Form, ErrorMessage } from 'formik';

const SearchBar = ({onSubmitFilter}) => {
    return(
 <Div m='4'>
    <Formik
          initialValues={{ search: '' }}
          onSubmit={(values, {resetForm}) => {
            //e.preventDefault();
            onSubmitFilter(values.search);
            resetForm();
          }}
        >
          <Form>
            <Field
              name="search"
              type="text"
              required
            />
            <ErrorMessage name="firstName" />
            <button type="submit">Search</button>
          </Form>
        </Formik>
 </Div>
 )
}

export default SearchBar;