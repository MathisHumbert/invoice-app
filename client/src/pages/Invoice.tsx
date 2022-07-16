import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getInvoice } from '../features/invoice/invoiceSlice';
import { AppDispatch, RootState } from '../utils/store';
import GoHome from '../components/invoice/GoHome';
import InvoiceHeader from '../components/invoice/InvoiceHeader';
import InvoiceInfosContainer from '../components/invoice/InvoiceInfosContainer';

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

  if (isLoading || !invoice) {
    return <div className='loading'></div>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  console.log(invoice);

  return (
    <Wrapper>
      <div className='container'>
        <GoHome />
        <InvoiceHeader status={invoice.status} />
        <InvoiceInfosContainer invoice={invoice} />
        {/* <GoHome />
        <Header status={single_invoice.status} />
        <Invoice />
        <Footer />
        <DeleteAside />
        <SidebarEdit id={id} /> */}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: calc(100% - 48px);
  min-height: calc(100vh - 72px);
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 150px;
  position: relative;

  @media (min-width: 768px) {
    width: calc(100% - 96px);
    padding-top: 48px;
    min-height: inherit;
    height: 100%;
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
