export const checkProfitability = (prof) => {
  const num = parseInt(prof);

  if (num > 400) return "#EA565E";
  if (num > 100) return "#EBA80F";
  if (num < 100) return "#4E9616";
};
