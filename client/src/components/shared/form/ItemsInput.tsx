import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import uniqid from 'uniqid';

import Input from '../Input';
import { InvoiceItems } from '../../../typing';

interface Props {
  value: InvoiceItems[];
  onChange: (...event: any[]) => void;
}

export default function ItemInput({ value: items, onChange }: Props) {
  const handleChange = (
    value: any,
    id: string,
    name: 'name' | 'quantity' | 'price',
    items: InvoiceItems[]
  ) => {
    const item = items.find((i: InvoiceItems) => i.id === id);
    item![name] = value;
    onChange(items);
  };

  return (
    <Wrapper>
      <h2>Item List</h2>

      {items.map((item, index) => {
        return (
          <div
            className={
              index === 0 ? 'first input-container' : 'input-container'
            }
            key={item.id}
          >
            {/* Name */}
            <Input
              onChange={(value) => handleChange(value, item.id, 'name', items)}
              value={item.name}
              type='text'
              label='Item Name'
              name='name'
            />
            {/* Quantity */}
            <Input
              onChange={() => {}}
              value={item.quantity}
              type='text'
              label='Qty.'
              name='quantity'
            />
            {/* Price */}
            <Input
              onChange={() => {}}
              value={item.price}
              type='text'
              label='Price'
              name='price'
            />
            {/* Total */}
            <div className='single-input total'>
              <p>Total</p>
              <p>{item.total}</p>
            </div>
            <div className='delete-item-container'>
              <button
                type='button'
                // onClick={() => dispatch(deleteItem(id))}
              >
                <FaTrash className='icon' />
              </button>
            </div>
          </div>
        );
      })}
      <button
        type='button'
        className='main-btn primary'
        onClick={() => {
          onChange([
            ...items,
            {
              id: uniqid(),
              name: '',
              quantity: '',
              price: '',
              total: 0,
            },
          ]);
        }}
      >
        + Add New Item
      </button>
      {/* {showAlert && <AlertData />} */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 66px;
  position: relative;

  h2 {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.38px;
    color: #777f98;
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    column-gap: 1rem;
    padding-top: 24px;

    .single-input:first-child {
      grid-column: 1 / 5;
    }

    &.first {
      padding-top: 0;
    }
  }

  .delete-item-container {
    position: relative;

    .icon {
      cursor: pointer;
      position: absolute;
      bottom: 16px;
      right: 7px;
      color: #888eb0;
      font-size: 15px;

      &:hover {
        color: var(--red-color);
      }
    }
  }

  .total {
    padding-top: 24px;

    p:last-child {
      padding-top: 32.5px;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .main-btn {
    margin-top: 48px;
    padding: 0;
    width: 100%;
  }
`;
