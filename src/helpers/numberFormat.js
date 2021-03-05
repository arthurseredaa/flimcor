export const numberFormat = (num, code) => {
  const notCorrectNum = new Intl.NumberFormat('en-US', { style: 'currency', currency: code }).format(num);
  let formattedNum = notCorrectNum.split("");
  formattedNum.splice(0, 1);
  formattedNum.splice(-1);
  formattedNum.splice(-1);
  formattedNum.splice(-1);
  formattedNum.join("");
  return formattedNum;
}
