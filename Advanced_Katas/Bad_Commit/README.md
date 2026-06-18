# Bad Commit Kata

## Objective

Use Git Bisect to identify the commit that introduced a bad file and remove it using Git Revert.

## Commands Used

### git bisect start

Starts the bisect process.

### git bisect bad

Marks the current commit as bad.

### git bisect good <commit>

Marks a known good commit.

### git bisect reset

Ends the bisect process and returns to the original branch.

### git diff

Compares two commits and verifies the changes introduced.

### git revert

Creates a new commit that undoes the bad commit.

## What I Learned

* Git Bisect uses binary search to quickly find a bad commit.
* Git Revert safely removes changes while preserving commit history.
* Binary search reduces the number of commits that need to be checked.

## Summary

Used Git Bisect to locate the commit that introduced `badfile` and used Git Revert to remove it while keeping the repository history intact.

