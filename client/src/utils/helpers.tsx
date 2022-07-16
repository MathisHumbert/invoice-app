export const formatPrice = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
};

export const formatDate = (inputDate: Date) => {
  let inputDateReworked = new Date(inputDate);
  let date, month, year;

  date = inputDateReworked.getDate();
  month = inputDateReworked.getMonth() + 1;
  year = inputDateReworked.getFullYear();

  date = date.toString().padStart(2, '0');

  month = month.toString().padStart(2, '0');

  return `${date}/${month}/${year}`;
};

export const setPaymentDue = (date: Date, date2: Date, terms: number) => {
  return new Date(date2.setDate(date.getDate() + terms));
};
