import styled from 'styled-components';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import FilterForm from './FilterForm';
// import NewButton from './NewButton';

export default function HomeHeader() {
  // const dispatch = useDispatch();
  // const { invoices } = useSelector((state) => state.dataReducer);

  return (
    <Wrapper>
      {/* <div className='left'>
        <h1>Invoices</h1>
        <p>
          <span className='large'>There are </span> {invoices.length} total
          invoice
          {invoices.length > 1 && 's'}
        </p>
      </div>
      <div className='right'>
        <div>
          <button
            type='button'
            className='filter-btn'
            onClick={() => dispatch(toggleFilters())}
          >
            <p>
              Filter <span className='large'>by status</span>
            </p>
            {isFiltersOpen ? (
              <FaChevronUp className='filter-icon icon' />
            ) : (
              <FaChevronDown className='filter-icon icon' />
            )}
          </button>
          <FilterForm />
        </div>
        <NewButton />
      </div> */}
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
