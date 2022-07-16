import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleEditInvoiceAside } from '../../features/aside/asideSlice';
import { AppDispatch } from '../../utils/store';
import {
  deleteInvoice,
  updateInvoice,
} from '../../features/invoice/invoiceSlice';

export default function InvoiceButtonsContainer({
  status,
  id,
}: {
  status: string;
  id: string;
}) {
  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();

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
        onClick={() => {
          navigate('/');
          dispatch(deleteInvoice(id));
        }}
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
