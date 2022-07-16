import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { InvoiceTypes } from '../../typing';
import FilterInvoice from './FilterInvoice';
import NewInvoiceButton from './NewInvoiceButton';

interface Props {
  invoices: InvoiceTypes[];
  filter: string[];
  setFilter: Dispatch<SetStateAction<string[]>>;
}

export default function HomeHeader({ invoices, filter, setFilter }: Props) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  let filterInvoices = filter.length
    ? invoices.filter((invoice) => filter.includes(invoice.status))
    : invoices;

  return (
    <Wrapper>
      <div className='left'>
        <h1>Invoices</h1>
        <p>
          <span className='large'>There are </span> {filterInvoices.length}{' '}
          total invoice
          {filterInvoices.length > 1 && 's'}
        </p>
      </div>
      <div className='right'>
        <div>
          <button
            type='button'
            className='filter-btn'
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <p>
              Filter <span className='large'>by status</span>
            </p>
            {isFilterOpen ? (
              <FaChevronUp className='filter-icon icon' />
            ) : (
              <FaChevronDown className='filter-icon icon' />
            )}
          </button>
          <FilterInvoice
            isFilterOpen={isFilterOpen}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <NewInvoiceButton />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  h1 {
    margin-bottom: 4px;
    margin-top: 0;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 18px;
    position: relative;
  }

  .filter-btn {
    background: transparent;
    display: flex;
    align-items: center;
    line-height: 0;
    gap: 8px;

    p {
      color: var(--primary-color);
    }

    .icon {
      font-size: 12px;
      color: var(--purple-color);
    }
  }

  @media (min-width: 768px) {
    margin: 56px 0;

    h1 {
      margin-bottom: 8px;
    }

    .right {
      gap: 40px;
    }

    .filter-icon {
      margin-left: 10px;
    }
  }
`;
