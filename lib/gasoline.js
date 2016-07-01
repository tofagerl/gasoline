function gasoline(fillings){
  const result = {};
  result.totalFilled = totalFilled(fillings);
  result.totalCost = totalCost(fillings);
  result.averagePrice = averagePrice(fillings);
  result.averageFilled = averageFilled(fillings);
  return result;
}
export default gasoline;
function cost(filling){
  return filling.amount * filling.cost;
}
function totalFilled(fillings){
  let sum = 0;
  for (var i = fillings.length - 1; i >= 0; i--) {
    sum +=fillings[i].amount;
  }
  return sum;
}
function totalCost(fillings){
  let sum = 0;
  for (var i = fillings.length - 1; i >= 0; i--) {
    sum+=cost(fillings[i]);
  }
  return sum;
}
function averagePrice (fillings){
  let sum = 0;
  for (var i = fillings.length - 1; i >= 0; i--) {
        sum+=cost(fillings[i]);

  }
  return sum/fillings.length;
}
function averageFilled(fillings){
  let sum=0;
  return sum;
}