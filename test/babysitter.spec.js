var chai = require('chai');
var assert = chai.assert;
var babysitter = require('./../babysitter.js');


describe('A babysitter', () => {

  it('should be paid $12 for one hour of work before midnight', () => {
    var results  = babysitter(setTime(5), setTime(6), setTime(10));

    assert.equal(results, 12);
  });

  it('should be paid $24 for two hours of work before midnight', () => {
    var results  = babysitter(setTime(5), setTime(7), setTime(10));

    assert.equal(24, results);
  });

  it('should be paid $20 for 1 hour before bedtime and 1 hour after bedtime', () => {
    var results  = babysitter(setTime(5), setTime(7), setTime(6));

    assert.equal(20, results);
  });

  it('should be paid $28 for 1 hour before bedtime and 2 hours after bedtime', () => {
    var results  = babysitter(setTime(5), setTime(8), setTime(6));

    assert.equal(28, results);
  });

  it('should be paid $16 for 1 hour after midnight', () => {
    var results  = babysitter(setTime(12), setTime(1), setTime(1));

    assert.equal(16, results);
  });

  it('should be paid $28 for 1 hour awake before midnight and 1 hour after midnight', () => {
    var results  = babysitter(setTime(11), setTime(1), setTime(12));

    assert.equal(28, results);
  });

  it('should be paid $24 for 1 hour in bed before midnight and 1 hour after midnight', () => {
    var results  = babysitter(setTime(11), setTime(1), setTime(11));

    assert.equal(24, results);
  });

  it('should not be paid for not working any hours', () => {
    var results  = babysitter(setTime(7), setTime(7), setTime(8));

    assert.equal(0, results);
  })

});

function setTime(hour) {
  var d = new Date();
  d.setHours(hour);
  d.setMinutes(0);
  d.setSeconds(0);
  return d;
}
