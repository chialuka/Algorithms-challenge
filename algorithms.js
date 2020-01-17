/** TIME CONVERSION 
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
 * Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
 */
function timeConversion(s) {
  let period = s.slice(-2);
  let hours = s.slice(0, 2);
  let digitalTime = s.slice(2, 8);
  if (period == 'PM' && hours != 12) {
    hours = Number(hours) + 12;
  }
  if (period == 'AM' && hours == 12) {
    hours = '00';
  }
  return hours + digitalTime;
}
