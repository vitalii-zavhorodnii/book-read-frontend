import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const Main = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 40px 16px 0;
  padding: 0 16px 0;
  background-color: ${(p) => p.theme.colors.bgPrimary};

  @media ${breakpoints.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${breakpoints.desktop} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default Main;
