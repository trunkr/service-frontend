// in: 3
// out: 03
export const padTo2Digits = (number: number) => {
  return number.toString().padStart(2, '0');
};

// in: 2023-05-10T18:43:03
// out: 2023.05.10
export const formatDate = (dateToFormat: string, formatString = '.') => {
  const date = new Date(dateToFormat);

  return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join(formatString);
};
