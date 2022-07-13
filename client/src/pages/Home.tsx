import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppDispatch, RootState } from '../utils/store';
import { getInvoices } from '../features/invoice/invoiceSlice';
import HomeHeader from '../components/home/HomeHeader';
import SingleInvoice from '../components/home/SingleInvoice';
import NoInvoices from '../components/home/NoInvoices';
import NewInvoiceAside from '../components/home/NewInvoiceAside';

export default function HomeInvoicePage() {
  const [filter, setFilter] = useState<string[]>([]);
  let { invoices, isLoading, isError, isFirstFetching } = useSelector(
    (state: RootState) => state.invoice
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!isFirstFetching) return;

    dispatch(getInvoices());
  }, []);

  if (isLoading || !invoices) {
    return <div className='loading'></div>;
  }

  if (isError) {
    return <h1>Someting went wrong please try again</h1>;
  }

  if (invoices.length === 0) {
    return <NoInvoices />;
  }

  return (
    <Wrapper>
      <div className='container'>
        <HomeHeader invoices={invoices} filter={filter} setFilter={setFilter} />
        <section>
          {filter.length
            ? invoices
                .filter((invoice) => filter.includes(invoice.status))
                .map((invoice) => (
                  <SingleInvoice key={invoice._id} invoice={invoice} />
                ))
            : invoices.map((invoice) => (
                <SingleInvoice key={invoice._id} invoice={invoice} />
              ))}
        </section>
        <NewInvoiceAside />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: calc(100% - 48px);
  margin: 0 auto;

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    width: calc(100% - 96px);

    section {
      gap: 24px;
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
