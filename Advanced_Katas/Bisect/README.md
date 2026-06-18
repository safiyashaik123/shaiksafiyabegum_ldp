# Bisect Kata

## Objective

Learn how to use Git Bisect to identify the commit that introduced a bug or test failure using binary search.

## Problem Statement

The master branch contained a failing build, but it was difficult to determine which commit introduced the issue. The goal was to use Git Bisect to efficiently locate the first bad commit.

## Commands Used

### git bisect start

Starts the bisect process.

### git bisect bad

Marks the current commit as bad.

### git bisect good initial-commit

Marks the initial commit as a known good commit.

### git bisect run ./test.sh

Automatically runs the test script on each commit and uses the result to identify good and bad commits.

### git bisect reset

Ends the bisect process and returns to the original branch.

### ./verify.sh

Verifies that the correct bad commit was identified.

## New Command Learned

git bisect run ./test.sh

This command automates the bisect process by running a test script on each checked-out commit.

## What I Learned

* Learned how Git Bisect uses binary search to locate a bad commit.
* Learned how to automate commit testing using a script.
* Learned how to identify the exact commit that introduced a failure.
* Learned how to reset and exit bisect mode after finding the issue.

## Summary

Used Git Bisect to automatically locate the commit that introduced a test failure. Learned how binary search and automated testing help quickly identify problematic commits in Git history.

