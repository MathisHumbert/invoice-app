import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { termsData } from '../../../utils/constants';
import { InvoiceTypes } from '../../../typing';

export default function TermInput({
  control,
}: {
  control: Control<InvoiceTypes, object>;
}) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <Wrapper $active={isAsideOpen}>
      <Controller
        control={control}
        name='paymentTerms'
        render={({ field: { onChange, value } }) => (
          <>
            <label onClick={() => setIsAsideOpen(!isAsideOpen)}>
              Payement Terms
            </label>
            <button type='button' onClick={() => setIsAsideOpen(!isAsideOpen)}>
              <h3>
                Next {value} Day{value > 1 ? 's' : ''}
              </h3>
              {isAsideOpen ? (
                <FaChevronUp className='icon' />
              ) : (
                <FaChevronDown className='icon' />
              )}
            </button>
            <aside>
              {termsData.map((item, index) => (
                <div className='single-item' key={index}>
                  <h3
                    className={item.term === value ? 'active' : ''}
                    onClick={() => {
                      onChange(item.term);
                      setIsAsideOpen(false);
                    }}
                  >
                    {item.text}
                  </h3>
                </div>
              ))}
            </aside>
          </>
        )}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $active: boolean }>`
  width: 100%;
  position: relative;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border: ${(props) =>
      `1px solid ${
        props.$active ? 'var(--purple-color)' : 'var(--border-color)'
      }`};
    padding: 17px 20px 17px 20px;
    background: transparent;
    line-height: 0;
    max-height: 55px;
    border-radius: 4px;

    h3 {
      letter-spacing: -0.25px;
      font-weight: 400;
    }

    .icon {
      color: var(--purple-color);
    }
  }

  aside {
    width: 100%;
    position: absolute;
    bottom: -10px;
    transform: translateY(100%);
    background: var(--main-bcg);
    border-radius: 8px;
    height: ${(props) => (props.$active ? ' 228px' : '0px')};
    overflow: hidden;
    transition: height 0.3s linear;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    z-index: 2;

    .single-item {
      padding: 1rem 0 1rem 24px;
      border-bottom: 1px solid var(--border-color);
    }

    h3 {
      letter-spacing: -0.25px;
      font-weight: 400;
      transition: color 0.3s ease-in-out;
      cursor: pointer;

      &.active {
        color: var(--purple-color);
      }

      &:hover {
        color: var(--purple-color);
      }
    }
  }
`;
