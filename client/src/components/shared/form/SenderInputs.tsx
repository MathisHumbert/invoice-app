import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';

import { InvoiceTypes } from '../../../typing';
import { general_rules } from '../../../utils/rules';
import Input from '../Input';

const SenderInputs = ({
  control,
}: {
  control: Control<InvoiceTypes, object>;
}) => {
  return (
    <Wrapper>
      <h4>Bill From</h4>
      {/* Street Address */}
      <Controller
        control={control}
        name='senderAddress.street'
        rules={general_rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            onChange={onChange}
            value={value}
            error={error}
            label='Street Address'
            type='text'
            name='street'
          />
        )}
      />
      <div className='input-container'>
        {/* City */}
        <Controller
          control={control}
          name='senderAddress.city'
          rules={general_rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              onChange={onChange}
              value={value}
              error={error}
              label='City'
              type='text'
              name='city'
            />
          )}
        />
        {/* Post Code */}
        <Controller
          control={control}
          name='senderAddress.postCode'
          rules={general_rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              onChange={onChange}
              value={value}
              error={error}
              label='Post Code'
              type='text'
              name='postCode'
            />
          )}
        />
        {/* Country */}
        <Controller
          control={control}
          name='senderAddress.country'
          rules={general_rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              onChange={onChange}
              value={value}
              error={error}
              label='Country'
              type='text'
              name='countey'
            />
          )}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .input-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;

    .single-input:last-child {
      grid-column: 1 / 3;
    }
  }
`;
export default SenderInputs;
