# Detached HEAD Kata

## Objective
Learn how to identify a Detached HEAD state and create a branch from an older commit.

## Commands Used

git status
- Checked whether HEAD was detached or attached to a branch.

git log --oneline --graph --all
- Viewed commit history and identified commit A.

git switch master
- Returned from Detached HEAD to the master branch.

git switch --detach 9a969f9
- Detached HEAD and moved directly to commit A.

git switch -c the-beginning
- Created a new branch from commit A.

git branch
- Verified the branch creation.

## New Commands Learned

git switch --detach <commit>
- Move HEAD directly to a specific commit without being on a branch.

git switch -c <branch-name>
- Create and switch to a new branch.

## Summary

Learned how to identify and recover from a Detached HEAD state and create a new branch from an older commit.
