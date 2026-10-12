// A PIN is required for every action on Rose's account.
const USER = "Rose Thecat";
const USER_PIN = 1234;
let roseBalance = 15_983;
const recipientBalances = new Map<string, number>();

function validAmount(amount: number): boolean {
  return Number.isFinite(amount) && amount > 0;
}

// Deposits money into Rose's account. Returns the new balance on success.
export function deposit(pin: number, amount: number): number | undefined {
  if (pin !== USER_PIN || !validAmount(amount)) return undefined;

  const newBalance = roseBalance + amount;
  if (!Number.isFinite(newBalance)) return undefined;

  roseBalance = newBalance;
  return roseBalance;
}

// Withdraws money from Rose's account. Returns the new balance on success.
export function withdrawl(pin: number, amount: number): number | undefined {
  if (pin !== USER_PIN || !validAmount(amount) || amount > roseBalance) {
    return undefined;
  }

  roseBalance -= amount;
  return roseBalance;
}

// Returns Rose's or a named recipient's balance after checking the PIN.
export function balanceCheck(
  pin: number,
  accountName: string = USER,
): number | undefined {
  if (pin !== USER_PIN) return undefined;

  const name = accountName.trim();
  if (!name) return undefined;
  if (name === USER) return roseBalance;
  return recipientBalances.get(name) ?? 0;
}

// Moves money from Rose's account to a named recipient.
export function transfer(
  pin: number,
  amount: number,
  recipient: string,
): boolean {
  if (pin !== USER_PIN || !validAmount(amount) || amount > roseBalance) {
    return false;
  }

  const name = recipient.trim();
  if (!name || name === USER) return false;

  const newRecipientBalance = (recipientBalances.get(name) ?? 0) + amount;
  if (!Number.isFinite(newRecipientBalance)) return false;

  roseBalance -= amount;
  recipientBalances.set(name, newRecipientBalance);
  console.log(`Success! ${amount} was transferred to ${name}`);
  return true;
}
