export const clone = (input: any): any => {
  return JSON.parse(JSON.stringify(input));
}
