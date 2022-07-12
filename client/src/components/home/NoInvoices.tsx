import styled from 'styled-components';

export default function NoInvoices() {
  return (
    <Wrapper>
      <img src='/assets/illustration-empty.svg' alt='no-input-img' />
      <h1>There is nothing here</h1>
      <p>
        Create an invoice by clicking the <br />{' '}
        <strong>
          New <span className='large'>Invoice</span>
        </strong>
        button and get started
      </p>
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

  p {
    text-align: center;

    span {
      font-weight: 700;
    }
  }

  img {
    width: 70%;
    max-width: 600px;
  }

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;
