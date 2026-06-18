# Commit on Wrong Branch II

## Objective
Move a commit that was accidentally created on the master branch to the new-feature branch and bring the bug fix to the feature branch.

## Commands Used

git reset HEAD~1
- Removed the latest commit from master while keeping the changes locally.

git stash
- Temporarily saved the changes.

git switch new-feature
- Switched to the feature branch.

git stash apply
- Restored the stashed changes.

git add .
- Staged the changes.

git commit -m "Implement second part of feature"
- Committed the changes on the correct branch.

git cherry-pick e39684e
- Copied the bug-fix commit from master to new-feature.

git log --oneline --graph --all --decorate
- Verified the final branch structure.

## What I Learned

- Learned how to move a commit from the wrong branch to the correct branch.
- Learned how to use git stash and git stash apply to temporarily save and restore changes.
- Learned how to use git cherry-pick to copy a specific commit from one branch to another.

## Workflow

Wrong Commit on Master
↓
Remove Commit using git reset
↓
Save Changes using git stash
↓
Switch to Feature Branch
↓
Restore Changes using git stash apply
↓
Commit on Correct Branch
↓
Bring Bug Fix using git cherry-pick
↓
Verify History

## Summary

In this kata, I learned how to move an accidentally committed feature from master to the new-feature branch using reset, stash, and commit. I also learned how to copy a bug-fix commit to another branch using cherry-pick.
