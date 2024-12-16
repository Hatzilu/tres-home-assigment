/**
 * Converts a number/float type to a user-friendly currency string.
 * @param n - currency amount as float/number type
 * @returns formatted currency as string
 */
export const numberToCurrencyString = (n: number): string => {
  return new Intl.NumberFormat('en-US').format(n)
}
