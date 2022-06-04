import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

import iconBook from 'assets/icons/book.svg';
import iconHome from 'assets/icons/home.svg';

const NavIcon = ({ src }) => <Icon src={src} />;

export const NavMenu = ({ src }) => (
  <Nav>
    <NavList>
      <NavItem>
        <NavLink
          to="/training"
          style={({ isActive }) => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '33px',
            height: '33px',
            backgroundColor: `${(p) => p.theme.colors.bgLight}`,
            borderRadius: '50%',
            // color: isActive ? '#4caf50' : '#ffffff',
            // borderBottom: isActive ? '1px solid #4caf50' : 'none',
            // fontWeight: isActive ? '700' : '500',
          })}
        >
          <NavIcon src={iconBook} />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/library">
          <NavIcon src={iconHome} />
        </NavLink>
      </NavItem>
    </NavList>
  </Nav>
);

const Nav = styled.nav`
  margin-left: 72px;

  @media ${breakpoints.tablet} {
    margin-left: 140px;
  }
  @media ${breakpoints.desktop} {
    margin-left: 406px;
  }
`;
const NavList = styled.ul`
  display: flex;
  border-right: 1px solid ${(p) => p.theme.colors.bgLight};
  align-items: center;
  justify-content: center;
`;
const NavItem = styled.li`
  display: flex;
  margin-right: 14px;
  width: 33px;
  height: 33px;
  /* background-color: ${(p) => p.theme.colors.bgLight};
  border-radius: 50%; */
  justify-content: center;
  align-items: center;

  @media ${breakpoints.tablet} {
    margin-right: 8px;
  }
`;
// const StyledLink = styled(Link)``;

const Icon = styled.img`
  padding: 0;
  height: 18px;
`;