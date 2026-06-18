# Save My Commit Kata

## Objective
Recover a lost commit using Git recovery techniques.

## Commands Used

git reflog
- Found the lost commit from HEAD history.

git reset --hard da0521b
- Restored the complete commit history and files.

git reset --hard initial-commit
- Returned the repository to the initial state.

git cherry-pick da0521b
- Restored only the Holy Grail commit.

## What I Learned

- Learned how to recover lost commits using git reflog.
- Learned how to restore complete history using git reset --hard.
- Learned how to restore a specific commit using git cherry-pick.
- Learned the difference between full history recovery and selective commit recovery.

## Summary

Recovered a lost commit by locating it in the reflog and restoring it using both git reset --hard and git cherry-pick.
