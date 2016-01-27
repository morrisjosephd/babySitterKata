var babysitter = function (begin, end, bed) {

  var startTime = begin.getHours();
  var endTime = end.getHours();
  var bedTime = bed.getHours();

  var awakeBilling = getAwakeBilling(startTime, endTime, bedTime);
  var bedBilling = getBedBilling(endTime, bedTime);
  var afterMidnightBilling = getAfterMidnightBilling(endTime);


  return awakeBilling + bedBilling + afterMidnightBilling;
};

function getAwakeBilling(startTime, endTime, bedTime) {
  if (bedTime < 5) {
    return 0;
  }
  if (bedTime > endTime && bedTime != 12) {
    return (endTime - startTime) * 12;
  } else {
    return (bedTime - startTime) * 12;
  }

}

function getBedBilling(endTime, bedTime) {
  if (endTime <=12 && endTime > bedTime) {
    return (endTime - bedTime) * 8;
  } else {
    return 0;
  }
}

function getAfterMidnightBilling(endTime) {
  if (endTime < 5) {
    return endTime * 16;
  } else {
    return 0;
  }
}

module.exports.babysitter = babysitter;
