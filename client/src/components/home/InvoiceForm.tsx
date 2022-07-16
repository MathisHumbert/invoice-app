import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { toggleNewInvoiceAside } from '../../features/aside/asideSlice';
import { createInvoice } from '../../features/invoice/invoiceSlice';
import { AppDispatch } from '../../utils/store';
import { setPaymentDue } from '../../utils/helpers';
import { InvoiceTypes } from '../../typing';

import SenderInputs from '../shared/form/SenderInputs';
import ClientInputs from '../shared/form/ClientInputs';
import CreateInvoiceButton from '../shared/form/CreateInvoiceButton';
import EditInvoiceButton from '../shared/form/EditInvoiceButton';
import ItemInputs from '../shared/form/ItemInputs';

interface Props {
  isNewInvoice: boolean;
  invoice?: InvoiceTypes;
}

export default function InvoiceForm({ isNewInvoice, invoice }: Props) {
  const { control, handleSubmit, reset, getValues } = useForm<InvoiceTypes>({
    defaultValues: {
      createdAt: isNewInvoice ? new Date() : invoice?.createdAt,
      paymentDue: isNewInvoice ? new Date() : invoice?.paymentDue,
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
  const dispatch = useDispatch<AppDispatch>();

  const onSaveAndSend: SubmitHandler<InvoiceTypes> = (data) => {
    if (!data.items.length) return;

    setPaymentDue(data.createdAt!, data.paymentDue, data.paymentTerms!);
    // set total
    // set status
    console.log(data);

    if (isNewInvoice) {
      //create
      //close new
    } else {
      //update
      //close old
    }
  };

  const onSaveAsDraft = () => {
    const data = getValues();
    setPaymentDue(data.createdAt!, data.paymentDue, data.paymentTerms!);

    dispatch(createInvoice(data));
    dispatch(toggleNewInvoiceAside());
  };

  const onDiscard = () => {
    reset({
      createdAt: new Date(),
      paymentDue: new Date(),
      description: '',
      paymentTerms: 30,
      clientName: '',
      clientEmail: '',
      status: 'draft',
      senderAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      clientAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      items: [],
      total: 0,
    });
    dispatch(toggleNewInvoiceAside());
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSaveAndSend)}>
      <SenderInputs control={control} />
      <ClientInputs control={control} />
      <ItemInputs control={control} />

      {isNewInvoice ? (
        <CreateInvoiceButton
          onDiscard={onDiscard}
          onSaveAsDraft={onSaveAsDraft}
        />
      ) : (
        <EditInvoiceButton />
      )}
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
