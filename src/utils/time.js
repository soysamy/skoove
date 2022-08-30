export const secsToTime = seconds => {
  const result = new Date(seconds * 1000).toISOString().slice(14, 19);
  return result;
};
