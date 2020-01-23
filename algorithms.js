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


/**
 * GRADING STUDENTS
 * Sam is a professor at the university and likes to round each student's  according to these rules:
 * If the difference between the score and the next multiple of 5 is less than 3, round  up to the next multiple of 5. 
 * If the value of  is less than 38, no rounding occurs as the result will still be a failing grade.
 */
function gradingStudents(grades) {
  const finalGrades = grades.map(value => value < 38 ? value : value % 5 == 3 ? value + 2 : value % 5 == 4 ? value + 1 : value);
  return finalGrades;
}


/**
 * BIRTHDAY CAKE CANDLES
 * You are in charge of the cake for your niece's birthday
 * and have decided the cake will have one candle for each year of her total age.
 * When she blows out the candles, she’ll only be able to blow out the tallest ones.
 * Your task is to find out how many candles she can successfully blow out.
 */
function birthdayCakeCandles(ar) {
  const largestNumber = Math.max(...ar);
  const candlesBlown = ar.filter(val => val == largestNumber);
  return candlesBlown.length;
}


/**
 * MIGRATORY BIRDS
 * Complete the migratoryBirds function in the editor below. 
 * It should return the lowest type number of the most frequently sighted bird.
 */
function migratoryBirds(arr) {
  const val = arr.reduce((acc, val) => {
    if (val in acc) {
      acc[val] += 1;
    } else {
      acc[val] = 1;
    }
    return acc;
  }, {});
  const freq = Math.max(...Object.values(val));
  const ans = Object.keys(val).sort((a, b) => a - b).find(x => val[x] == freq);
  return ans[0];
}

/**
 * DAY OF THE PROGRAMMER
 * From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1918 they used the Gregorian calendar system.
 * The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31 was February 14.
 * Given a year, y, find the date of the 256th day of that year according to 
 * the official Russian calendar during that year. 
 * Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .
 */
function dayOfProgrammer(year) {
  const leapYearDay = `12.09.${year}`;
  const nonLeapDay = `13.09.${year}`
  if (year == 1918) return '26.09.1918';
  if (year < 1918) {
    if (year % 4 == 0) {
      return leapYearDay;
    } else {
      return nonLeapDay;
    }
  }
  if (year > 1918) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      return leapYearDay;
    } else {
      return nonLeapDay;
    }
  }
}

/**
 * KANGAROO
 * You are choreographing a circus show with various animals. For one act, 
 * you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity)
 * Solve the Kangaroo Challenge. It should return YES if they reach the same position at the same time, or NO if they don't. k
 * angaroo has the following parameter(s):
 * x1, v1: integers, starting position and jump distance for kangaroo 1
 * x2, v2: integers, starting position and jump distance for kangaroo 2
 */
function kangaroo(x1, v1, x2, v2) {
  if (v1 - v2 == 1) return 'YES';
  if (v2 > v1) return 'NO';
  if ((x2 - x1) % (v1 - v2) == 0) {
    return 'YES';
  } else {
    return 'NO';
  }
}

/**
 * BIRTHDAY CHOCOLATE
 * Lily has a chocolate bar that she wants to share it with Ron for his birthday. 
 * Each of the squares has an integer on it. She decides to share a contiguous segment 
 * of the bar selected such that the length of the segment matches Ron's birth month and 
 * the sum of the integers on the squares is equal to his birth day. 
 * You must determine how many ways she can divide the chocolate.
 * birthday has the following parameter(s):
 * s: an array of integers, the numbers on each of the squares of chocolate
 * d: an integer, Ron's birth day
 * m: an integer, Ron's birth month
 */
function birthday(s, d, m) {
  let count = 0;
  s.map((x, y) => {
    const newArr = [];
    for (let i = 0; i < m; i++) {
      const slicedArr = s.slice(y);
      newArr.push(slicedArr[i]);
    }
    const sum = newArr.reduce((acc, val) => acc + val);
    if (sum == d) count++;
  });
  return count;
}


/**
 * DIVISIBLE SUM PAIRS
 * You are given an array of n integers, ar = [ar[0], ar[1],...,ar[n-1]], and a positive integer, k. 
 * Find and print the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.
 * divisibleSumPairs has the following parameter(s):
 * n: the integer length of array ar
 * ar: an array of integers
 * k: the integer to divide the pair sum by
 */

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  ar.map((x, y) => {
    if (y != n - 1) {
      const newArr = ar.slice(y + 1);
      for (let i = 0; i < newArr.length; i++) {
        if ((x + newArr[i]) % k == 0) count++;
      }
    }
  })
  return count;
}

/**
 * BON APPETIT
 * Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. 
 * Brian wants to order something that Anna is allergic to though, 
 * and they agree that Anna won't pay for that item. 
 * Brian gets the check and calculates Anna's portion. 
 * You must determine if his calculation is correct.
 * bonAppetit has the following parameter(s):
 * bill: an array of integers representing the cost of each item ordered
 * k: an integer representing the zero-based index of the item Anna doesn't eat
 * b: the amount of money that Anna contributed to the bill
 */
function bonAppetit(bill, k, b) {
  const ans = bill.filter((x, y) => y != k).reduce((acc, val) => acc + val) / 2;
  console.log(ans == b ? 'Bon Appetit' : (b - ans));
}
