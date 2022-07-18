import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  toggleEditInvoiceAside,
  toggleDeleteInvoiceAside,
} from '../../features/aside/asideSlice';
import { AppDispatch } from '../../utils/store';
import { updateInvoice } from '../../features/invoice/invoiceSlice';

export default function InvoiceButtonsContainer({
  status,
  id,
}: {
  status: string;
  id: string;
}) {
  const dispatch = useDispatch<AppDispatch>();

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
          onClick={() =>
            dispatch(updateInvoice({ invoiceFormData: { status: 'paid' }, id }))
          }
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
