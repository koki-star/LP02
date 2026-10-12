# Final review notes

## Kokob

Review: Compare the 10 issues in `issue_log.md` with the fixed code.

I checked the issue log against the fixed code. The issues listed there look addressed to me.

## Yisakor

Review: Check the PIN, balance, and transfer changes in the fixed code.

I looked through the fixed code and did not find another issue with those changes.

## ESLint comparison

- `npx eslint bankOfTheNorth.ts`: 5 errors, 0 warnings. ESLint flagged unused `USER`, the unused assignment to `balance` twice (under two rules), unused `amount`, and unused `transferAmount`.
- `npx eslint fixBankOfTheNorth.ts`: no reported problems; the command exited successfully.
- The issue log covers the ineffective deposit assignment and unused withdrawal amount. It did not separately list unused `USER` or `transferAmount`.
- The issue log also identified requirements and logic issues that these ESLint results did not report, including the balance representation, missing PIN check for `balanceCheck`, no insufficient-funds check, and transfer behavior.
