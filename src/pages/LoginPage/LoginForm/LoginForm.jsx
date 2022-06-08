import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { useFormik } from 'formik';

import FormInput from 'components/UI-kit/inputs/FormInput';
import GoogleButton from 'components/UI-kit/buttons/GoogleButton';
import InlineButton from 'components/UI-kit/buttons/InlineButton';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

// import { validate } from 'utils/validateForRegistration';

const LoginForm = ({ onLogin, isFetching }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const form = useFormik({
    initialValues,
    // validate,
    enableReinitialize: true,
    onSubmit: ({ email, password }) => {
      onLogin({ email, password });
    },
  });

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    form;

  const handleLink = () => {
    navigate('/register');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <ItemWrapper>
          <GoogleButton />
        </ItemWrapper>

        <ItemWrapper>
          <FormInput
            required
            title="Email"
            placeholder="your@email.com"
            name="email"
            type="text"
            disabled={isFetching}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : null}
          />
        </ItemWrapper>

        <ItemWrapper>
          <FormInput
            required
            title="Password"
            placeholder="********"
            name="password"
            type="password"
            disabled={isFetching}
            value={values.password.slice(0, 30)}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password ? errors.password : null}
          />
        </ItemWrapper>

        <ItemWrapper>
          <CommonButton type="submit" title="Login" variant="accent" />
        </ItemWrapper>
      </Form>

      <ItemWrapper>
        <InlineButton onClick={handleLink} label="Register" variant="accent" />
      </ItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 32px 20px;
  background-color: transparent;

  @media ${breakpoints.tablet} {
    width: 400px;
    padding: 40px;
    background-color: ${(p) => p.theme.colors.bgSecondary};
  }
`;

const Form = styled.form`
  width: 100%;
`;

const ItemWrapper = styled.ul`
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
`;

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default LoginForm;
