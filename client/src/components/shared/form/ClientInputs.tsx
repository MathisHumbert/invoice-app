import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';

import { InvoiceTypes } from '../../../typing';
import { general_rules, email_rules, number_rules } from '../../../utils/rules';
import Input from '../Input';
import DateInput from './DateInput';
import TermInput from './TermInput';

export default function ClientInputs({
  control,
}: {
  control: Control<InvoiceTypes, object>;
}) {
  return (
    <Wrapper>
      <h4>Bill To</h4>
      {/* Name */}
      <Controller
        control={control}
        name='clientName'
        rules={general_rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            onChange={onChange}
            value={value}
            error={error}
            label={`Client's Name`}
            type='text'
            name='clientName'
          />
        )}
      />
      {/* Email */}
      <Controller
        control={control}
        name='clientEmail'
        rules={email_rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            onChange={onChange}
            value={value}
            error={error}
            label={`Client's Email`}
            type='text'
            name='clientEmail'
          />
        )}
      />
      {/* Street Address */}
      <Controller
        control={control}
        name='clientAddress.street'
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
          name='clientAddress.city'
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
          name='clientAddress.postCode'
          rules={number_rules}
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
          name='clientAddress.country'
          rules={general_rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              onChange={onChange}
              value={value}
              error={error}
              label='Country'
              type='text'
              name='country'
            />
          )}
        />
      </div>
      <div className='input-two-container'>
        {/* Date */}
        <DateInput control={control} />
        {/* Terms */}
        <TermInput control={control} />
      </div>
      {/* Description */}
      <Controller
        control={control}
        name='description'
        rules={general_rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            onChange={onChange}
            value={value}
            error={error}
            label='Project Description'
            type='text'
            name='description'
          />
        )}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 40px;

  .input-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;

    .single-input:last-child {
      grid-column: 1 / 3;
    }
  }

  .input-two-container {
    margin-top: 16px;
  }

  #date {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .input-two-container {
      display: flex;
      gap: 24px;
    }
  }
`;
