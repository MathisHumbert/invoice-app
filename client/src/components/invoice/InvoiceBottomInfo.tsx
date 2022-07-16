import styled from 'styled-components';

import { formatPrice } from '../../utils/helpers';
import { InvoiceTypes } from '../../typing';

export default function InvoiceBottomInfo({
  invoice,
}: {
  invoice: InvoiceTypes;
}) {
  const { items, total } = invoice;
  return (
    <Wrapper>
      <div className='top'>
        <div className='title'>
          <p>Item Name</p>
          <p>QTY.</p>
          <p>Price</p>
          <p>Total</p>
        </div>
        <div className='items'>
          {items.map((item, index) => {
            const { name, quantity, price, total } = item;
            return (
              <div className='item' key={index}>
                <h4 className='name'>{name}</h4>
                <h4 className='quantity'>
                  {quantity}
                  <span className='small'> x {formatPrice(+price!)}</span>
                </h4>
                <h4 className='price'>{formatPrice(+price!)}</h4>
                <h4 className='total'>{formatPrice(+total!)}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className='bottom'>
        <p>Grand Total</p>
        <h1>{formatPrice(total)}</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  margin-top: 42px;

  .top {
    padding: 24px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: var(--ternary-bcg);
  }

  .bottom {
    padding: 24px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: var(--secondary-bcg);
    display: flex;
    align-items: center;
    justify-content: space-between;

    p,
    h1 {
      color: var(--white-color);
    }

    h1 {
      font-size: 24px;
    }
  }

  .title {
    display: none;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .item {
    position: relative;
  }

  .quantity {
    margin-top: 8px;
    color: var(--secondary-color);
  }

  .total {
    position: absolute;
    bottom: 50%;
    right: 0;
    transform: translateY(50%);
  }

  .price {
    display: none;
  }

  @media (min-width: 768px) {
    .top {
      padding: 32px;
    }

    .title {
      display: grid;
      grid-template-columns: 40% 10% 25% 25%;

      p {
        text-align: right;

        &:first-child {
          text-align: left;
        }
      }
    }

    .items {
      margin-top: 32px;
    }

    .item {
      display: grid;
      grid-template-columns: 40% 10% 25% 25%;

      h4 {
        text-align: right;
      }

      .name {
        text-align: left;
      }

      .quantity {
        margin-top: 0;
        margin-right: 15px;
      }
    }

    .small {
      display: none;
    }

    .price {
      display: block;
    }

    .total {
      position: relative;
      bottom: inherit;
      right: inherit;
      transform: translateY(0);
    }
  }
`;
