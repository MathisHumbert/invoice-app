import styled from 'styled-components';

export default function InvoiceButtonsContainer({
  status,
}: {
  status: string;
}) {
  // const dispatch = useDispatch();

  return (
    <Wrapper>
      {status !== 'paid' && (
        <button
          className='main-btn primary'
          // onClick={() => {
          //   dispatch(openEditSidebar());
          //   dispatch(setItem(single_invoice));
          // }}
        >
          Edit
        </button>
      )}
      <button
        className='main-btn red'
        // onClick={() => dispatch(toggleDeletion())}
      >
        Delete
      </button>
      {status === 'pending' && (
        <button
          className='main-btn purple'
          // onClick={() =>
          //   dispatch(updateInvoice(single_invoice._id, { status: 'paid' }))
          // }
        >
          Mark as Paid
        </button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;
