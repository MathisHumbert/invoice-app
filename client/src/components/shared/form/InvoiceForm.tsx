import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import {
  toggleEditInvoiceAside,
  toggleNewInvoiceAside,
} from '../../../features/aside/asideSlice';
import { createInvoice } from '../../../features/invoice/invoiceSlice';
import { AppDispatch } from '../../../utils/store';
import { setPaymentDue } from '../../../utils/helpers';
import { InvoiceTypes } from '../../../typing';

import SenderInputs from './SenderInputs';
import ClientInputs from './ClientInputs';
import CreateInvoiceButton from './CreateInvoiceButton';
import EditInvoiceButton from './EditInvoiceButton';
import ItemInputs from './ItemInputs';

interface Props {
  isNewInvoice: boolean;
  invoice?: InvoiceTypes;
}

export default function InvoiceForm({ isNewInvoice, invoice }: Props) {
  const defaultValues = {
    createdAt: isNewInvoice ? new Date() : new Date(invoice!.createdAt),
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
  };
  const { control, handleSubmit, reset, getValues } = useForm<InvoiceTypes>({
    defaultValues,
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
    reset(defaultValues);
    isNewInvoice
      ? dispatch(toggleNewInvoiceAside())
      : dispatch(toggleEditInvoiceAside());
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
        <EditInvoiceButton onCancel={onDiscard} />
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
