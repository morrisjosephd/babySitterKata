var babysitter = function (begin, end, bed) {

  var startTime = begin.getHours();
  var endTime = end.getHours();
  var bedTime = bed.getHours();

  var awakeBilling = getAwakeBilling(startTime, endTime, bedTime);
  var bedBilling = getBedBilling(endTime, bedTime);


  return awakeBilling + bedBilling;
};

function getAwakeBilling(startTime, endTime, bedTime) {
  if (endTime < bedTime) {
    return (endTime - startTime) * 12;
  } else {
    return (bedTime - startTime) *12;
  }
}

function getBedBilling(endTime, bedTime) {
  if (endTime > bedTime) {
    return (endTime - bedTime) * 8;
  } else {
    return 0;
  }
}

module.exports.babysitter = babysitter;
