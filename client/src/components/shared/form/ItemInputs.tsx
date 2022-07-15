import styled from 'styled-components';
import { Control, Controller, useFieldArray } from 'react-hook-form';
import { FaTrash } from 'react-icons/fa';

import { InvoiceTypes } from '../../../typing';
import Input from '../Input';
import { general_rules, number_rules } from '../../../utils/rules';

export default function ItemInputs({
  control,
}: {
  control: Control<InvoiceTypes, object>;
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  return (
    <Wrapper>
      {fields.map((item, id) => {
        let total = +item.quantity! * +item.price!;
        return (
          <div
            className={id === 0 ? 'first input-container' : 'input-container'}
            key={item.id}
          >
            {/* Name */}
            <Controller
              control={control}
              defaultValue={item.name}
              name={`items.${id}.name`}
              rules={general_rules}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  error={error}
                  label='Item Name'
                  type='text'
                  name='name'
                />
              )}
            />
            {/* Quantity */}
            <Controller
              control={control}
              defaultValue={item.quantity}
              name={`items.${id}.quantity`}
              rules={number_rules}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  error={error}
                  label='Qty.'
                  type='text'
                  name='quantity'
                />
              )}
            />{' '}
            {/* Price */}
            <Controller
              control={control}
              defaultValue={item.price}
              name={`items.${id}.price`}
              rules={number_rules}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  error={error}
                  label='Price'
                  type='text'
                  name='price'
                />
              )}
            />
            {/* Total */}
            <div className='single-input total'>
              <p>Total</p>
              <p>{total}</p>
            </div>
            <div className='delete-item-container'>
              <button type='button' onClick={() => remove(id)}>
                <FaTrash className='icon' />
              </button>
            </div>
          </div>
        );
      })}
      <button
        type='button'
        className='main-btn primary'
        onClick={() =>
          append({
            name: '',
            quantity: '',
            price: '',
            total: 0,
          })
        }
      >
        + Add New Item
      </button>
    </Wrapper>
  );
}

// const ConditionField = ({
//   control,
//   index,
//   register,
// }: {
//   control: Control;
//   index: number;
// }) => {
//   const output = useWatch<any>({
//     name: 'data',
//     control,
//     defaultValue: 'yay! I am watching you :)',
//   });

//   return (
//     <>
//       {output[index]?.name === 'bill' && (
//         <input {...register(`data[${index}].conditional`)} />
//       )}
//       <input
//         {...register(`data[${index}].easyConditional`)}
//         style={{ display: output[index]?.name === 'bill' ? 'block' : 'none' }}
//       />
//     </>
//   );
// };

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
