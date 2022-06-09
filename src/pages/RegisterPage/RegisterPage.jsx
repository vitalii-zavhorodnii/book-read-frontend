import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Media from 'react-media';
import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

import RegsiterForm from './RegsiterForm';
import InfoBlockAbout from './InfoBlockAbout';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

const modalRoot = document.querySelector('#modal-root');

const RegisterPage = () => {
const [modal, setModal] = useState(true);
  const handleClose = () => {
    setModal(false);
  };

  const navigate = useNavigate();
  const handleLink = () => {
    navigate('/login');
  };


  return (
    <Wrapper>

      <Media
        queries={{
          small: '(max-width: 767px)',
        }}
      >
        {(matches) =>
          matches.small && modal &&  createPortal
          (
            <Overlay>
              <Content>
                <InfoBlockAbout />
              <ButtonBlockWrapper>
                <ButtonWrapper>
                  <CommonButton
                    type="button"
                    title="Login"
                    variant="transparent"
                    onClick={handleLink}
                  />
                </ButtonWrapper>
                <ButtonWrapper>
                  <CommonButton
                    type="button"
                    title="Register"
                    variant="accent"
                    onClick={handleClose}
                  />
                </ButtonWrapper>
              </ButtonBlockWrapper>
              </Content>
              
            </Overlay>,
            modalRoot
          )
        }
      </Media>

      <RegisterBlock>
        <RegsiterForm />
      </RegisterBlock>
      <Media query="(min-width: 768px)" render={() => <InfoBlockAbout />} />
    </Wrapper>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  overflow: auto;
  background-color: white;
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;
const ButtonBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 275px;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const ButtonWrapper = styled.div`
  width: 130px;
`;
const RegisterBlock = styled.div`
  margin: 0 auto;
  padding: 90px 75px;
  background-color: ${(p) => p.theme.colors.bgAlpha};
  background-image: linear-gradient(
      to right,
      ${(p) => p.theme.colors.bgAlpha},
      ${(p) => p.theme.colors.bgAlpha}
    ),
    url(${(p) => p.theme.backgrounds.register});
`;

export default RegisterPage;
