import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { logoutUser } from '../../features/user/userSlice';
import { RootState } from '../../utils/store';

export default function UserIcon() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Wrapper>
      <div>
        <h3>{user}</h3>
        <button type='button' onClick={() => dispatch(logoutUser())}>
          logout
        </button>
      </div>
      <img src='/assets/image-avatar.jpg' alt='user-img' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  h3 {
    text-align: center;
    color: var(--navbar-color);
    text-transform: capitalize;
  }

  button {
    background: transparent;
    font-weight: 600;
    color: var(--navbar-color);
    cursor: pointer;

    &:hover {
      color: #dfe3fa;
    }
  }

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;
