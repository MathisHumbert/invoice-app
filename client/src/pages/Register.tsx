import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AppDispatch, RootState } from '../utils/store';
import { resetInvoiceState } from '../features/invoice/invoiceSlice';
import { loginUser, registerUser } from '../features/user/userSlice';
import { email_rules, general_rules } from '../utils/rules';
import AppLogo from '../components/shared/AppLogo';
import Input from '../components/shared/Input';

interface FormInputs {
  name?: string;
  email: string;
  password: string;
}

export default function Register() {
  const [isMember, setIsMember] = useState(true);
  const { user, isLoading } = useSelector((state: RootState) => state.user);
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, [user, navigate]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    dispatch(resetInvoiceState());
    if (isMember) {
      dispatch(loginUser(data));
    } else {
      dispatch(registerUser(data));
    }
  };

  if (user) return null;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header>
          <div className='logo'>
            <AppLogo />
          </div>
          <h1>Invoice App</h1>
        </header>
        <h1 className='title'>{isMember ? 'Login' : 'Register'}</h1>
        {!isMember && (
          <Controller
            control={control}
            name='name'
            rules={general_rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input
                onChange={onChange}
                value={value}
                error={error}
                label='Name'
                type='text'
                name='name'
              />
            )}
          />
        )}
        <Controller
          control={control}
          name='email'
          rules={email_rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              onChange={onChange}
              value={value}
              error={error}
              label='Email'
              type='text'
              name='email'
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          rules={general_rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              onChange={onChange}
              value={value}
              error={error}
              label='Password'
              type='password'
              name='password'
            />
          )}
        />
        <button
          type='submit'
          className='submit-btn main-btn purple'
          disabled={isLoading}
        >
          Submit
        </button>
        <h3>
          {isMember ? 'Not a member yet' : 'Already a member'} ?{' '}
          <button
            type='button'
            className='toggle-btn'
            onClick={() => setIsMember(!isMember)}
          >
            {isMember ? 'Register' : 'Login'}
          </button>
        </h3>
        <h3>
          <button
            type='button'
            className='toggle-btn'
            // onClick={handleGlobalUser}
          >
            Access the app
          </button>{' '}
          without register or login ?
        </h3>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  padding: 2rem 24px;

  form {
    position: relative;
    width: 100%;
    background: var(--main-bcg);
    padding: 24px;
    border-radius: 8px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background: var(--purple-color);
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  header {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-bottom: 2rem;
    align-self: center;
  }

  .single-input {
    margin-top: 24px;
  }

  .title {
    align-self: center;
    margin-bottom: 8px;
  }

  .submit-btn {
    margin-top: 2rem;
    padding: 26px 0;
    border-radius: 6px;
    text-transform: capitalize;
    line-height: 0;
    width: 100%;
  }

  .toggle-btn {
    font-size: 16px;
    letter-spacing: -0.8px;
    line-height: 24px;
    background: transparent;
    color: var(--purple-color);
    text-transform: uppercase;

    &:hover {
      color: var(--purple-hover-color);
    }
  }

  h3 {
    text-align: center;
    margin-top: 24px;
  }
`;
