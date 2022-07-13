import { Control, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { InvoiceTypes } from '../../../typing';
import '../../../styles/calendar.css';

const DateInput = ({ control }: { control: Control<InvoiceTypes, object> }) => {
  return (
    <div className='date-input'>
      <label htmlFor='date'>Invoice Date</label>
      <Controller
        control={control}
        name='createdAt'
        render={({ field: { onChange, value } }) => (
          <div className='date-container'>
            <DatePicker
              onChange={(e) => onChange(e)}
              selected={value}
              className='input'
              id='date'
            />
            <img src='/assets/icon-calendar.svg' alt='calendar' />
          </div>
        )}
      />
    </div>
  );
};

export default DateInput;
