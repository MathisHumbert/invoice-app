import styled from 'styled-components';
import GoHome from '../components/shared/GoHome';

export default function NotFound() {
  return (
    <Wrapper>
      <img src='/assets/illustration-empty.svg' alt='no-input-img' />
      <h1>There is nothing here</h1>
      <GoHome />
    </Wrapper>
  );
}

const Wrapper = styled.article`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  img {
    width: 70%;
    max-width: 600px;
  }

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;
