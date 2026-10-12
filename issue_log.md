# Bank of the North issue log

Findings refer to the unchanged original source. `Fixed` means the corresponding issue is addressed in `fixBankOfTheNorth.ts`. Kokob and Yisakor recorded their final reviews in `check.md`.

## 1. Balance is stored as an array

- **Location:** `bankOfTheNorth.ts`, line 8
- **Issue:** `BALANCE` is an array, although the functions use it as an account balance.
- **Explanation:** `[15, 983]` does not identify one numeric balance or explain what the two numbers mean. The deposit and withdrawal expressions cannot treat it as a single amount of money.
- **Suggested fix:** Treat `[15, 983]` as Rose Thecat's single starting balance of 15,983 and store it as a number.
- **Status:** Fixed

## 2. Deposit does not update the account balance

- **Location:** `bankOfTheNorth.ts`, lines 12–16
- **Issue:** The deposit calculation assigns to the local `balance` parameter, but then logs and returns `BALANCE`.
- **Explanation:** The account balance is never assigned the calculated value. The expression also adds an array to a number rather than adding two numeric amounts.
- **Suggested fix:** Add the deposit amount to the correct numeric account balance, save that result, and return the updated balance.
- **Status:** Fixed

## 3. Withdrawal uses an undeclared name and the wrong operation

- **Location:** `bankOfTheNorth.ts`, lines 23–27
- **Issue:** `withdrawl` assigns to `balance`, which is not declared in that function, and its expression uses addition without using `amount`.
- **Explanation:** The function body does not calculate a withdrawal from the requested amount or update the account balance.
- **Suggested fix:** Use `amount` to subtract from the correct numeric balance and save the result after checking that the withdrawal is allowed.
- **Status:** Fixed

## 4. Withdrawal has no insufficient-funds check

- **Location:** `bankOfTheNorth.ts`, lines 23–27
- **Issue:** The withdrawal function has no condition that prevents a balance below zero.
- **Explanation:** The program requirements say a user's balance should never become negative. A withdrawal needs a check against available funds before changing the balance.
- **Suggested fix:** Reject amounts greater than the available balance, and decide how to handle invalid or negative amounts.
- **Status:** Fixed

## 5. Balance check does not require a PIN

- **Location:** `bankOfTheNorth.ts`, lines 34–35
- **Issue:** `balanceCheck` has no PIN parameter or PIN check.
- **Explanation:** The program requirements say a PIN must be provided during every action, but this action returns the balance without checking one.
- **Suggested fix:** Require a PIN argument and validate it before returning the balance.
- **Status:** Fixed

## 6. Message after return cannot be reached

- **Location:** `bankOfTheNorth.ts`, lines 35–36
- **Issue:** The balance message comes after `return BALANCE`.
- **Explanation:** Returning ends the function before the following log statement can run.
- **Suggested fix:** Put the message before the return if it is needed, or remove it if returning the balance is enough.
- **Status:** Fixed

## 7. Transfer calls withdrawal with the wrong arguments

- **Location:** `bankOfTheNorth.ts`, lines 40–41
- **Issue:** `transfer` calls `withdrawl(amount)`, although `withdrawl` declares both `pin` and `amount` parameters.
- **Explanation:** The transfer's PIN is not passed to the withdrawal call, and the withdrawal amount argument is missing.
- **Suggested fix:** Validate the PIN and amount, then subtract the amount within the transfer; do not make the incorrect withdrawal call.
- **Status:** Fixed

## 8. Transfer reports success without checking the withdrawal

- **Location:** `bankOfTheNorth.ts`, lines 41–42
- **Issue:** The success message is unconditional.
- **Explanation:** The code does not check whether the withdrawal was accepted before saying the transfer succeeded.
- **Suggested fix:** Report success only after the withdrawal and the rest of the transfer have been confirmed.
- **Status:** Fixed

## 9. Transfer does not credit the recipient

- **Location:** `bankOfTheNorth.ts`, lines 39–43
- **Issue:** The `reciver` name is used only in a message; no recipient balance is updated.
- **Explanation:** The function comment says the money is transferred to another user's account, but the function contains no step that credits that account.
- **Suggested fix:** Decide how recipient accounts are represented, then add the amount to the intended recipient only when the transfer is allowed.
- **Status:** Fixed

## 10. Transfer returns a function instead of a result

- **Location:** `bankOfTheNorth.ts`, line 43
- **Issue:** `return balanceCheck` returns the function itself.
- **Explanation:** There are no parentheses to call the function, so this statement does not request a balance or provide a transfer result.
- **Suggested fix:** Return `true` only after a completed transfer and `false` when the transfer is rejected.
- **Status:** Fixed
