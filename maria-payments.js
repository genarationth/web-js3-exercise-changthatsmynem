// Exercise #1

// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

// Return the value of what she should be paying.

let monthlyPayment = 100;

const mariaPayments = (transaction) =>
  (transaction * 1.01 + 3) * monthlyPayment;

console.log(mariaPayments(500));
