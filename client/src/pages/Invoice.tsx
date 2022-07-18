import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { getInvoice } from '../features/invoice/invoiceSlice';
import { AppDispatch, RootState } from '../utils/store';
import GoHome from '../components/shared/GoHome';
import InvoiceHeader from '../components/invoice/InvoiceHeader';
import InvoiceInfosContainer from '../components/invoice/InvoiceInfosContainer';
import InvoiceButtonsContainer from '../components/invoice/InvoiceButtonsContainer';
import DeleteInvoiceAside from '../components/invoice/DeleteInvoiceAside';
import EditInvoiceAside from '../components/invoice/EditInvoiceAside';

export default function Invoice() {
  const { invoice, isLoading, isError } = useSelector(
    (state: RootState) => state.invoice
  );
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) dispatch(getInvoice(id));
    // eslint-disable-next-line
  }, [id]);

  if (isError) {
    return <Navigate to='/' />;
  }

  if (isLoading || !invoice) {
    return <div className='loading'></div>;
  }

  return (
    <>
      <Wrapper>
        <div className='container'>
          <GoHome />
          <InvoiceHeader status={invoice.status} id={invoice._id} />
          <InvoiceInfosContainer invoice={invoice} />
          <footer>
            <InvoiceButtonsContainer status={invoice.status} id={invoice._id} />
          </footer>
          <EditInvoiceAside invoice={invoice} />
        </div>
      </Wrapper>
      <DeleteInvoiceAside id={invoice._id} />
    </>
  );
}

const Wrapper = styled.main`
  width: calc(100% - 48px);
  min-height: calc(100vh - 72px);
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 150px;
  position: relative;

  footer {
    position: absolute;
    bottom: 0;
    left: -24px;
    width: calc(100% + 48px);
    margin: 0 auto;

    background: var(--main-bcg);
    padding: 24px;
  }

  @media (min-width: 768px) {
    width: calc(100% - 96px);
    padding-top: 48px;
    min-height: inherit;
    height: 100%;

    footer {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    width: 100%;
    padding-left: 103px;
    display: grid;
    justify-items: center;

    .container {
      width: 100%;
      max-width: 1220px;
    }
  }
`;
