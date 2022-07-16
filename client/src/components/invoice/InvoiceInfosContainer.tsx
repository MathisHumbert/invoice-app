import styled from 'styled-components';

import { InvoiceTypes } from '../../typing';
import InvoiceBottomInfo from './InvoiceBottomInfo';
import InvoiceMiddleInfo from './InvoiceMiddleInfo';
import InvoiceTopInfo from './InvoiceTopInfo';

export default function InvoiceInfosContainer({
  invoice,
}: {
  invoice: InvoiceTypes;
}) {
  return (
    <Wrapper>
      <InvoiceTopInfo invoice={invoice} />
      <InvoiceMiddleInfo invoice={invoice} />
      <InvoiceBottomInfo invoice={invoice} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100%;
  background: var(--main-bcg);
  padding: 24px;
  margin-top: 13px;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 32px;
    height: fit-content;
  }
  @media (min-width: 768px) {
    padding: 48px;
    height: fit-content;
  }
`;
