# Commit on Wrong Branch Kata

## Commands Used

git log --oneline --graph --all
- Displayed all commits and branches.

git rebase master
- Rebased quickfix onto master.

git switch master
- Switched to master branch.

git branch changes-including-B
- Created a backup branch.

git reset --hard quickfix
- Moved master to the quickfix commit.

git branch -D quickfix
- Deleted the temporary quickfix branch.

git log --oneline --graph --all --decorate
- Verified the final branch structure.

## What I Learned

- Learned how to fix a commit made on the wrong branch.
- Learned how to use rebase, reset, and branch management.

## Summary

Fixed a commit made on the wrong branch by moving it to the correct branch and maintaining a clean Git history.
