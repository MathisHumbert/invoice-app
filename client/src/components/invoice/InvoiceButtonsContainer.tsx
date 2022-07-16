import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  toggleDeleteInvoiceAside,
  toggleEditInvoiceAside,
} from '../../features/aside/asideSlice';

export default function InvoiceButtonsContainer({
  status,
}: {
  status: string;
}) {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {status !== 'paid' && (
        <button
          className='main-btn primary'
          onClick={() => {
            dispatch(toggleEditInvoiceAside());
          }}
        >
          Edit
        </button>
      )}
      <button
        className='main-btn red'
        onClick={() => dispatch(toggleDeleteInvoiceAside())}
      >
        Delete
      </button>
      {status === 'pending' && (
        <button
          className='main-btn purple'
          // onClick={() =>
          //   dispatch(updateInvoice(single_invoice._id, { status: 'paid' }))
          // }
        >
          Mark as Paid
        </button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;
