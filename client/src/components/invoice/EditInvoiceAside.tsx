import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../utils/store';
import { toggleEditInvoiceAside } from '../../features/aside/asideSlice';
import GoBack from '../shared/form/GoBack';
import InvoiceForm from '../shared/form/InvoiceForm';

import { InvoiceTypes } from '../../typing';

export default function EditInvoiceAside({
  invoice,
}: {
  invoice: InvoiceTypes;
}) {
  const { isEditInvoiceAsideOpen } = useSelector(
    (state: RootState) => state.aside
  );
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper $active={isEditInvoiceAsideOpen}>
        <div className='container'>
          <header>
            <GoBack isNewInvoice={false} />
            <h1>
              Edit <span>#</span>
              {invoice._id.substring(18, 24).toUpperCase()}
            </h1>
          </header>
          <InvoiceForm isNewInvoice={false} invoice={invoice} />
        </div>
      </Wrapper>
      <div
        className={isEditInvoiceAsideOpen ? 'open rest-aside' : 'rest-aside'}
        onClick={() => dispatch(toggleEditInvoiceAside())}
      ></div>
    </>
  );
}

const Wrapper = styled.aside<{ $active: boolean }>`
  position: fixed;
  top: 72px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--sidebar-bcg);
  padding-top: 2rem;
  overflow: scroll;
  overflow-x: hidden;
  transform: ${(props) =>
    props.$active ? 'translateX(0)' : 'translateX(-120%)'};
  transition: transform 0.5s ease-in-out;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 4px;
  }

  .container {
    padding: 0 24px;
  }

  header {
    h1 {
      margin-top: 24px;
      letter-spacing: -0.5;
      line-height: 32px;
      font-size: 24px;
    }

    span {
      color: var(--special-color);
    }
  }

  @media (min-width: 768px) {
    top: 80px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    max-width: 616px;

    .container {
      padding: 0 46px;
    }
  }

  @media (min-width: 1440px) {
    top: 0;
    left: 103px;
    max-width: 719px;
  }
`;
