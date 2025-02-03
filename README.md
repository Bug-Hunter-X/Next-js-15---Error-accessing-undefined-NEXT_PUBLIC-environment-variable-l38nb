# Next.js 15 - Error accessing undefined NEXT_PUBLIC environment variable

This repository demonstrates a common error encountered in Next.js 15 applications when attempting to access environment variables that are not defined, even if they are prefixed with `NEXT_PUBLIC_`.

## Bug

The `about.js` file attempts to access `process.env.NEXT_PUBLIC_MY_VAR`.  If this variable is not defined in a `.env.local` file (or similar environment file), Next.js will throw an error.

## Solution

The solution is to either define the environment variable in a `.env` file or to add a check to prevent the error when the variable is not defined.