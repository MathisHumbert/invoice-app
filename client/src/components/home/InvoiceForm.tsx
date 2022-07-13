import styled from 'styled-components';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import uniqid from 'uniqid';

import { InvoiceTypes } from '../../typing';
import SenderInputs from '../shared/form/SenderInputs';
import ClientInputs from '../shared/form/ClientInputs';
import CreateInvoiceButton from '../shared/form/CreateInvoiceButton';
import EditInvoiceButton from '../shared/form/EditInvoiceButton';
import ItemInput from '../shared/form/ItemsInput';

interface Props {
  isNewInvoice: boolean;
  invoice?: InvoiceTypes;
}

export default function InvoiceForm({ isNewInvoice, invoice }: Props) {
  const { control, handleSubmit, watch } = useForm<InvoiceTypes>({
    defaultValues: {
      createdAt: isNewInvoice ? new Date() : invoice?.createdAt,
      paymentDue: isNewInvoice ? new Date() : invoice?.createdAt,
      description: isNewInvoice ? '' : invoice?.description,
      paymentTerms: isNewInvoice ? 30 : invoice?.paymentTerms,
      clientName: isNewInvoice ? '' : invoice?.clientName,
      clientEmail: isNewInvoice ? '' : invoice?.clientEmail,
      status: isNewInvoice ? 'draft' : invoice?.status,
      senderAddress: isNewInvoice
        ? {
            street: '',
            city: '',
            postCode: '',
            country: '',
          }
        : invoice?.senderAddress,
      clientAddress: isNewInvoice
        ? {
            street: '',
            city: '',
            postCode: '',
            country: '',
          }
        : invoice?.clientAddress,
      items: isNewInvoice ? [] : invoice?.items,
      total: isNewInvoice ? 0 : invoice?.total,
    },
  });

  const onSubmit: SubmitHandler<InvoiceTypes> = (data) => {
    console.log(FormData);

    // add the number in terms to paymentdue
  };

  // console.log(watch());

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <SenderInputs control={control} />
      <ClientInputs control={control} />
      <Controller
        control={control}
        name='items'
        render={({ field: { value, onChange } }) => (
          <ItemInput value={value} onChange={onChange} />
        )}
      />

      {isNewInvoice ? <CreateInvoiceButton /> : <EditInvoiceButton />}
    </Wrapper>
  );
}

const Wrapper = styled.form`
  padding-top: 33px;

  .single-input {
    padding-top: 24px;
  }

  h4 {
    color: var(--purple-color);
  }
`;