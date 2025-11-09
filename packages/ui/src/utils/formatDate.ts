export const formatDate: (date: string) => string = (date) => {
  const dateObject = new Date(date);

  return dateObject.toLocaleDateString();
};
