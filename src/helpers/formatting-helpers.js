export function createDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let today = new Date();
  const date = today.toLocaleDateString('en-US', options);
  return date;
}