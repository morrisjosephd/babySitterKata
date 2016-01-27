const AWAKE_BILLING = 12;
const ASLEEP_BILLING = 8;
const AFTER_MIDNIGHT_BILLING = 16;

module.exports = function (begin, end, bed) {

  var startTime = transformHours(begin.getHours());
  var endTime = transformHours(end.getHours());
  var bedTime = transformHours(bed.getHours());

  var pay = 0;

  for (var i = startTime; i < endTime; i++) {
    pay += findRate(i, bedTime);
  }

  return pay;
};

function findRate (hour, bedTime) {
  if (hour < 12 && hour < bedTime) {
    return AWAKE_BILLING;
  } else if (hour < 12 && bedTime <= hour) {
    return ASLEEP_BILLING
  } else {
    return AFTER_MIDNIGHT_BILLING;
  }
}

function transformHours (time) {
  return time < 5 ? time + 12 : time;
}

