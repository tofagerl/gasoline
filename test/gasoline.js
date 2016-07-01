import test from 'ava';
import gasoline from '../lib/gasoline';
const time1 = new Date("2016-07-01T15:11:23.293Z");
const time2 = new Date("2016-06-01T15:11:23.293Z");
const testData = [
  {
    time: time1,
    amount: 40,
    cost: 14.55,
    fullTank: true
  },
    {
    time: time2,
    amount: 30,
    cost: 14.00,
    fullTank: true
  }
]
const result= {
  totalFilled: 70,
  averageFilled: 35,
  totalCost: 1002,
  averagePrice:501
}
test('returns correct result', t => {
  t.is(gasoline(testData), result);
});
test('sanity', t => {
  t.is(0,0);
});