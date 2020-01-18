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

/**
 *  BREAKING RECORDS
 * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
 * She tabulates the number of times she breaks her season record for most points and least points in a game. 
 * Points scored in the first game establish her record for the season, and she begins counting from there.
 * Given Maria's scores for a season, find and print the number of times 
 * she breaks her records for most and least points scored during the season.
 */
function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let minCount = 0;
  let maxCount = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      minCount += 1;
      min = scores[i]
    }
    if (scores[i] > max) {
      maxCount += 1;
      max = scores[i];
    }
  }
  const ansArr = [];
  ansArr.push(maxCount, minCount);
  return ansArr;
}
