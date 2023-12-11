# Solution to the Registration and Access Challenge in Skill Test

## Problem Description

The issue involved users being unable to register for an account and access the profile page.

## Prerequisites

- Node.js version 16.14.0 is required for this solution.

### Change Node.js Version Using NVM

To ensure compatibility with this solution, it's recommended to use Node.js version 16.14.0. [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) makes it easy to switch between Node.js versions.

If you don't have nvm installed, you can follow the installation instructions in the [official repository](https://github.com/nvm-sh/nvm#install--update-script).

To switch to Node.js version 16.14.0, run the following commands:

```bash
    nvm install 16.14.0
    nvm use 16.14.0
```

## Steps for the Solution

### 1. Database Table Update

An update was made to the `user` table in the database to include a new column named `get_bnb` with the data type `BOOLEAN`.

```sql
    ALTER TABLE user
    ADD COLUMN get_bnb BOOLEAN;
```

### 2. Environment Variable Update

The `.env` file was modified to replace the variable `HOST` with `DB_HOST` to ensure proper connection to the backend. Additionally, the email service provider configuration was updated in the backend `.env` file:

```env
    EMAIL_SERVICE=smtp2go
    EMAIL_PORT=2525
    EMAIL=your_email@example.com
    EMAIL_USER=your_smtp_username
    EMAIL_PWD=your_smtp_password
```

### 3. Update to Package.json

The script for starting the server in the `package.json` file was corrected to use `&&` instead of `&` for proper execution. The corrected script is as follows:

```json
    "server": "cd backend && npm start"
```

### 4. Correct Input Type for Verification Code

In the registration form, the verification code field was modified to only accept numbers. This ensures that only numbers are entered in the verification code field.

### 5. Wallet Creation

Once the user has successfully logged in, the wallet is created using the seed phrase associated with the account. This wallet is used to manage the user's funds and tokens.

### 6. Access to the Profile Page

After completing the wallet creation process, the user can access the profile page. This page displays the user's balance and the different tokens minted to their wallet.

## Outcome

With these changes and additions, users should be able to register successfully, access their profiles, and manage their funds and tokens effectively.

# Bugs Pending Resolution

## Bug 1: Language Button State Not Synchronized

### Description

The language change button state in the UI does not synchronize between the header and footer. Changing the language in one location does not reflect in the other.

### Note

This bug is pending further investigation to identify and implement a fix.

## Conclusion

Bug 3 is still unresolved and requires additional attention for a complete solution.

# Enhancements

## Suggestion 1: Implementation of ESLint and Prettier

### Description

Integrate ESLint and Prettier into the project to enforce consistent code style and formatting. Additionally, configure "format on save" functionality to streamline the development process.

## Suggestion 2: Improved Configuration Management

### Description

Enhance the configuration management process by implementing the following practices:

1. **Exclude .env from Version Control:**

   - Remove the `.env` file from version control to prevent sensitive information (e.g., API keys, passwords) from being exposed.
   - Provide a `.env.example` file with variable names for developers to reference. Each developer should manually create their own `.env` file with the required values.

2. **Separate Frontend Configuration:**
   - Move frontend variables from `env.js` to the `.env` file.
   - Modify `env.js` to load variables from the `.env` file.

These changes aim to improve security and make the configuration process more developer-friendly.

## Suggestion 3: Code Cleanup

### Description

Perform a comprehensive code cleanup to enhance code quality and maintainability. The following steps are recommended:

1. **Remove Unused Code:**

   - Identify and remove any code segments, functions, or variables that are no longer in use.
   - Check for commented-out code and remove it if it's not needed.

2. **Eliminate Console Logs:**

   - Search for and remove all `console.log` statements from the codebase.
   - Consider using a logging library for more structured logging if needed.

3. **Unused Imports:**
   - Identify and remove any import statements that are not used in the code.
   - Ensure that all imported modules and components are necessary for the project.

These cleanup tasks aim to streamline the codebase, reduce potential sources of errors, and maintain a cleaner development environment.
