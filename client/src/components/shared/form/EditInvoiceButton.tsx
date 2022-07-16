import styled from 'styled-components';

export default function EditInvoiceButton({
  onCancel,
}: {
  onCancel: () => void;
}) {
  return (
    <Wrapper>
      <button type='button' className='main-btn primary' onClick={onCancel}>
        Cancel
      </button>
      <button className='main-btn purple' type='submit'>
        Save & Send
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--sidebar-bcg);
  display: flex;
  justify-content: flex-end;
  margin-top: 88px;
  padding: 24px 0;
  gap: 8px;
  position: relative;

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
    &::after {
      left: -48px;
      width: calc(100% + 96px);
    }
  }
`;
