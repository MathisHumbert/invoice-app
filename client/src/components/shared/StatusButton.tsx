import styled from 'styled-components';

export default function StatusButton({ status }: { status: string }) {
  return (
    <Wrapper className={status}>
      <div>
        <span className='circle'></span>
        {status}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  width: 104px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  line-height: 0;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &.paid {
    background: rgba(51, 214, 159, 0.05);
    color: var(--green-color);

    .circle {
      background: var(--green-color);
    }
  }

  &.pending {
    background: rgba(255, 143, 0, 0.05);
    color: var(--orange-color);

    .circle {
      background: var(--orange-color);
    }
  }
  &.draft {
    background: var(--draft-bcg);
    color: var(--draft-color);

    .circle {
      background: var(--draft-color);
    }
  }

  .circle {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;
