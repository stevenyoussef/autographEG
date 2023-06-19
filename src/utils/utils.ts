import { DATE_FORMATTER } from '~/config.mjs';

const formatter =
  DATE_FORMATTER ||
  new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

/* eslint-disable no-mixed-spaces-and-tabs */
export const getFormattedDate = (date: Date) => (date ? formatter.format(date) : '');

export const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};
/* export function isLoggedIn(request: Request): boolean {
  // Implement your logic to check if the user is authenticated
  // based on the request (e.g., checking cookies or headers)
  return true; // or false, depending on the authentication status
} */
export function checkCredentials(email: string, password: string): boolean {
  const validEmail = "user@example.com";
  const validPassword = "password123";

  return email === validEmail && password === validPassword;
}
