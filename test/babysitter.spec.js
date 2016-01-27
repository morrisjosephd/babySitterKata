var chai = require('chai');
var assert = chai.assert;
var babysitter = require('./../babysitter.js');

function setTime(hour) {
  var d = new Date();
  d.setHours(hour);
  d.setMinutes(0);
  d.setSeconds(0);
  return d;
}

describe('A babysitter', function() {

  it('should be paid $12 for one hour of work before midnight', function() {
    var startTime = setTime(5);
    var endTime =  setTime(6);
    var bedTime = setTime(10);
    var results  = babysitter(startTime, endTime, bedTime);

    assert.equal(results, 12);
  });

  it('should be paid $24 for two hours of work before midnight', function() {
    var startTime = setTime(5);
    var endTime =  setTime(7);
    var bedTime = setTime(10);
    var results  = babysitter(startTime, endTime, bedTime);

    assert.equal(24, results);
  });

  it('should be paid $20 for 1 hour before bedtime and 1 hour after bedtime', function() {
    var startTime = setTime(5);
    var endTime = setTime(7);
    var bedTime = setTime(6);
    var results = babysitter(startTime, endTime, bedTime);

    assert.equal(20, results);
  });

  it('should be paid $28 for 1 hour before bedtime and 2 hours after bedtime', function() {
    var startTime = setTime(5);
    var endTime = setTime(8);
    var bedTime = setTime(6);
    var results = babysitter(startTime, endTime, bedTime);

    assert.equal(28, results);
  });

  it('should be paid $16 for 1 hour after midnight', function() {
    var startTime = setTime(12);
    var endTime = setTime(1);
    var bedTime = setTime(1);
    var results = babysitter(startTime, endTime, bedTime);

    assert.equal(16, results);
  });

  it('should be paid $28 for 1 hour awake before midnight and 1 hour after midnight', function() {
    var startTime = setTime(11);
    var endTime = setTime(1);
    var bedTime = setTime(12);
    var results = babysitter(startTime, endTime, bedTime);

    assert.equal(28, results);
  });

  it('should be paid $24 for 1 hour in bed before midnight and 1 hour after midnight', function() {
    var startTime = setTime(11);
    var endTime = setTime(1);
    var bedTime = setTime(11);
    var results = babysitter(startTime, endTime, bedTime);

    assert.equal(24, results);
  });

  it('should not be paid for not working any hours', function() {
    var startTime = setTime(7);
    var endTime = setTime(7);
    var bedTime = setTime(8);
    var results = babysitter(startTime, endTime, bedTime);

    assert.equal(0, results);
  })

});