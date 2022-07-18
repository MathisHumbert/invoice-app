import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { toggleDeleteInvoiceAside } from '../../features/aside/asideSlice';
import { AppDispatch, RootState } from '../../utils/store';

export default function DeleteInvoiceAside({ id }: { id: string }) {
  const { isDeleteInvoiceAsideOpen } = useSelector(
    (state: RootState) => state.aside
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Wrapper $active={isDeleteInvoiceAsideOpen}>
      <div className='deletion'>
        <h1>Confirm Deletion</h1>
        <p>
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>
        <div className='buttons'>
          <button
            className='main-btn primary'
            onClick={() => dispatch(toggleDeleteInvoiceAside())}
          >
            Cancel
          </button>
          <Link to='/'>
            <button
              className='main-btn red'
              onClick={() => {
                // dispatch(deleteInvoice(single_invoice._id));
                dispatch(toggleDeleteInvoiceAside());
              }}
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.aside<{ $active: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${(props) => (props.$active ? '5' : '-1')};
  opacity: ${(props) => (props.$active ? '1' : '0')};
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  transition: all 0.5s ease-in-out;

  .deletion {
    background: var(--main-bcg);
    padding: 32px;
    border-radius: 8px;
    max-width: 380px;

    p {
      margin-top: 18px;
      margin-bottom: 24px;
      line-height: 22px;
    }
  }

  .buttons {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .deletion {
      padding: 48px;
      max-width: 428px;
    }
  }
`;
