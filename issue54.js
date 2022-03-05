/*Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"
The birthday is expected to be in the past.
*/
function ageInDays(year, month, day){
    const birthday = new Date();
    const today = new Date();
    birthday.setDate(day);
    birthday.setMonth(month-1);
    birthday.setFullYear(year);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = today.getTime() - birthday.getTime();
    const diffInDays = Math.round(diffInTime / oneDay); 
    
    return "You are " + diffInDays + " days old";
  }

  или
  const ageInDays = (y, m, d) => 
  'You are ' + (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000 + ' days old';