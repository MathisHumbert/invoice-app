import styled from 'styled-components';

import { InvoiceTypes } from '../../typing';

export default function InvoiceTopInfo({ invoice }: { invoice: InvoiceTypes }) {
  const {
    _id,
    description,
    senderAddress: { city, country, postCode, street },
  } = invoice;
  return (
    <Wrapper>
      <div className='right'>
        <h3>
          <span>#</span>
          {_id.substring(18, 24).toUpperCase()}
        </h3>
        <p>{description.length ? description : 'no description'}</p>
      </div>
      <div className='left'>
        <p>{street.length ? street : "no sender's street"}</p>
        <p>{city.length ? city : "no sender's city"}</p>
        <p>{postCode.length ? postCode : "no sender's post code"}</p>
        <p>{country.length ? country : "no sender's country"}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .left {
    margin-top: 30px;

    p {
      line-height: 18px;
      font-size: 11px;
    }
  }

  h3 {
    span {
      color: var(--special-color);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    .left {
      margin-top: 0;
      p {
        text-align: right;
      }
    }

    h3 {
      margin-bottom: 10px;
    }
  }
`;
