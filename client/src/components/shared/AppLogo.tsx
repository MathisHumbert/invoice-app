import styled from 'styled-components';

export default function AppLogo() {
  return (
    <Wrapper className='nav-logo'>
      <img src='/assets/logo.svg' alt='main-logo' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 72px;
  height: 72px;
  max-height: 72px;
  display: grid;
  place-items: center;
  background: var(--purple-color);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  position: relative;
  z-index: 2;

  img {
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #9277ff;
    bottom: 0;
    left: 0;
    transform: translateY(50%);
    z-index: 1;
    border-top-left-radius: 20px;
  }

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    max-height: 80px;

    img {
      width: 32px;
    }
  }
`;
