// Program requirements:
// - A user can withdraw funds.
// - A user can deposit funds.
// - A user's balance should never become negative.
// - A PIN must be provided during every action.

const USER = "Rose Thecat";
const BALANCE = [15, 983];
const USER_PIN = 1234;

// Deposits money into a user's account.
export function deposit(pin: number, balance: number) {
  if (pin === USER_PIN) {
    balance = BALANCE + balance;
    console.log(BALANCE);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Withdraws money from a user's account.
export function withdrawl(pin: number, amount: number) {
  if (pin === USER_PIN) {
    balance = BALANCE + balance;
    console.log(BALANCE);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Returns the account balance.
export function balanceCheck() {
  return BALANCE;
  console.log(`Your balance is ${BALANCE}`);
}

// Transfers money to another user's account and withdraws it from the account.
export function transfer(pin: number, amount: number, reciver: string) {
  const transferAmount = withdrawl(amount);
  console.log(`Success! ${amount} was transferred to ${reciver}`);
  return balanceCheck;
}

// AI transparency: AI was used to clean up this code.
