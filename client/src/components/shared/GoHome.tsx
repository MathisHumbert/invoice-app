import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function GoHome() {
  return (
    <Wrapper>
      <Link to='/'>
        <FaChevronLeft className='icon' />
        <h4>Go back</h4>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background: transparent;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    line-height: 0;
    gap: 24px;
  }

  &:hover {
    h4 {
      color: var(--secondary-color);
    }
  }

  h4 {
    color: var(--primary-color);
    margin-top: 3px;
  }

  .icon {
    font-size: 12px;
    color: var(--purple-color);
  }
`;
