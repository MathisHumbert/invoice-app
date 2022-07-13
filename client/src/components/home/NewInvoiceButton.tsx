import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { toggleNewInvoiceAside } from '../../features/aside/asideSlice';

export default function NewInvoiceButton() {
  const dispatch = useDispatch();

  return (
    <Wrapper
      type='button'
      className='new-btn'
      onClick={() => dispatch(toggleNewInvoiceAside())}
    >
      <span className='icon-container'>
        <FaPlus className='icon' />
      </span>
      <p>
        New <span className='large'>Invoice</span>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background: var(--purple-color);
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--white-color);
  border-radius: 24px;
  line-height: 0;
  padding: 6px;
  padding-right: 10px;

  &:hover {
    background: var(--purple-hover-color);
  }

  p {
    color: var(--white-color);
  }

  .icon-container {
    width: 32px;
    height: 32px;
    background: var(--white-color);
    color: var(--purple-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    padding: 8px 14px 8px 10px;
  }
`;
