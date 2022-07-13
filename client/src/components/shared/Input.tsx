import { FieldError } from 'react-hook-form';

interface Props {
  onChange: (value: any) => void;
  value: string | undefined;
  error?: FieldError | undefined;
  label: string;
  type: string;
  name: string;
}

export default function Input({
  onChange,
  value,
  error,
  label,
  type,
  name,
}: Props) {
  return (
    <div className='single-input invoice-input'>
      <div className='label-container'>
        <label htmlFor={name} className={error?.message && 'error'}>
          {label}
        </label>
        {error?.message && <span className='input-error'>{error.message}</span>}
      </div>
      <input
        type={type}
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={error?.message ? 'input error' : 'input'}
      />
    </div>
  );
}
