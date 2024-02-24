export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  console.log("Date 1", d1);
  const d2 = new Date(dateStr).getTime();
  console.log("Date 2", d2);
  return Math.round((d2 - d1) / 60000);
}
