import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';

import AppLogo from '../components/shared/AppLogo';

export default function Landing() {
  return (
    <Wrapper>
      <div className='container'>
        <header>
          <div className='logo'>
            <AppLogo />
          </div>
          <h1>Invoice App</h1>
        </header>
        <div className='info'>
          <p>This is a MERN project from Frontend Mentor!</p>
          <p>
            I coded this project using React, Redux and Styled Components for
            the front end part.
          </p>
          <p>
            I coded this project using NodeJS, Express and MongoDB for the back
            end
          </p>
          <Link to='/register'>
            <button className='main-btn purple' type='button'>
              Login / Register
            </button>
          </Link>
        </div>
        <ul className='icon-container'>
          <li>
            <a href='https://twitter.com/Mathis1Humbert'>
              <FaTwitter className='icon' />
            </a>
          </li>
          <li>
            <a href='https://github.com/MathisHumbert'>
              <FaGithub className='icon' />
            </a>
          </li>
          <li>
            <a href='https://www.frontendmentor.io/profile/MathisHumbert'>
              <SiFrontendmentor className='icon' />
            </a>
          </li>
        </ul>
        <p className='rights'>
          {new Date().getFullYear()} Mathis Humbert. All rights reserved
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  padding: 2rem 24px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-bottom: 3rem;
  }

  p {
    line-height: 22px;
  }

  a {
    text-decoration: none;
  }

  .main-btn {
    margin-top: 24px;
    padding: 20px;
    border-radius: 6px;
    text-transform: capitalize;
    line-height: 0;
  }

  ul {
    display: flex;
    gap: 24px;
    margin-top: 24px;

    li {
      list-style-type: none;
    }

    .icon {
      color: var(--primary-color);
      font-size: 24px;
      transition: color 0.25s ease-in-out;

      &:hover {
        color: var(--purple-color);
      }
    }
  }

  .rights {
    font-weight: 600;
    margin-top: 24px;
  }
`;
