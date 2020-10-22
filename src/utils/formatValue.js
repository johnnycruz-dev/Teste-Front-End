const formatValue = value => {
  const cents = value.substring(value.length - 2);
  const real = value.substring(0, value.length - 2);
  const valueFormatted = `${real}.${cents}`;

  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valueFormatted);
};

export default formatValue;
