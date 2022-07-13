import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

export default function CreateInvoiceButton() {
  const dispatch = useDispatch();

  const handleSaveSend = () => {
    // send to API
  };

  const handleSaveDraft = () => {
    // pass rules and send
  };

  const handleDiscard = () => {
    // close and reset
  };

  return (
    <Wrapper>
      <button
        className='main-btn primary'
        type='button'
        onClick={handleDiscard}
      >
        Discard
      </button>
      <div className='btn-container'>
        <button
          className='main-btn dark'
          type='button'
          onClick={handleSaveDraft}
        >
          Save as Draft
        </button>
        <button
          className='main-btn purple'
          type='submit'
          onClick={handleSaveSend}
        >
          Save & Send
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--sidebar-bcg);
  display: flex;
  margin-top: 88px;
  padding: 24px 0;
  gap: 8px;
  position: relative;

  .btn-container {
    display: flex;
    gap: 8px;
  }

  button {
    font-size: 8px;
  }

  &::after {
    position: absolute;
    content: '';
    top: -64px;
    left: -24px;
    width: calc(100% + 48px);
    height: 64px;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }

  @media (min-width: 768px) {
    justify-content: space-between;

    &::after {
      left: -48px;
      width: calc(100% + 96px);
    }

    button {
      font-size: 12px;
    }
  }
`;
