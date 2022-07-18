import styled from 'styled-components';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import useTheme from '../../contexts/useTheme';
import AppLogo from '../shared/AppLogo';
import UserIcon from './UserIcon';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Wrapper>
      <AppLogo />
      <div className='right'>
        <button type='button' onClick={toggleTheme}>
          {theme === 'light' ? (
            <BsFillMoonFill className='icon' />
          ) : (
            <BsFillSunFill className='icon' />
          )}
        </button>
        <div className='vr'></div>
        <UserIcon />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background: var(--navbar-bcg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  min-height: 72px;
  z-index: 4;

  .right {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-right: 24px;

    .vr {
      width: 1px;
      height: 72px;
      background: #494e6e;
    }

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    button {
      background: transparent;
    }

    .icon {
      font-size: 20px;
      color: var(--navbar-color);
      cursor: pointer;

      &:hover {
        color: #dfe3fa;
      }
    }
  }

  @media (min-width: 768px) {
    height: 80px;
    min-height: 80px;

    .right {
      gap: 32px;
      margin-right: 32px;

      .vr {
        height: 80px;
      }
    }
  }

  @media (min-width: 1440px) {
    height: 100vw;
    position: fixed;
    width: 103px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    .nav-logo {
      position: fixed;
      top: 0;
      left: 0;
      width: 103px;
      height: 103px;
    }

    .right {
      position: fixed;
      bottom: 32px;
      flex-direction: column;
      align-items: center;

      .vr {
        height: 1px;
        width: 103px;
      }
    }
  }
`;
