import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// import { closeNewSidebar } from '../../redux/actions/toggleActions';
// import { resetItem } from '../../redux/actions/formActions';

export default function GoBack() {
  // const dispatch = useDispatch();

  return (
    <Wrapper
      onClick={() => {
        // dispatch(closeNewSidebar());
        // dispatch(resetItem());
      }}
    >
      <FaChevronLeft className='icon' />
      <h4>Go back</h4>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  line-height: 0;
  gap: 24px;

  &:hover {
    h4 {
      color: var(--secondary-color);
    }
  }

  h4 {
    color: var(--primary-color);
    margin-top: 3px;
  }

  .icon {
    font-size: 12px;
    color: var(--purple-color);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
