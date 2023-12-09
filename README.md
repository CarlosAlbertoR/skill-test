# Solution to the Skill Test

## Problem Description
The issue involved users being unable to register for an account and access the profile page.

## Steps for the Solution

### 1. Database Table Update
An update was made to the `user` table in the database to include a new column named `get_bnb` with the data type `BOOLEAN`.

### 2. Correct Input Type for Verification Code
In the registration form, the verification code field was modified to only accept numbers. This ensures that only numbers are entered in the verification code field.

### 3. Wallet Creation
Once the user has successfully logged in, the wallet is created using the seed phrase associated with the account. This wallet is used to manage the user's funds and tokens.

### 4. Access to the Profile Page
After completing the wallet creation process, the user can access the profile page. This page displays the user's balance and the different tokens minted to their wallet.

## Outcome
With these changes and additions, users should be able to register successfully, access their profiles, and manage their funds and tokens effectively.

End of Solution!
