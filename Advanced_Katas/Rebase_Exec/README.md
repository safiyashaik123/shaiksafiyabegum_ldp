# Rebase Exec Kata

## Purpose

To learn how to use git rebase --exec to run tests on every commit during a rebase.

## Steps Performed

1. Ran the setup script and entered the exercise repository.
2. Started a rebase using git rebase --exec.
3. Fixed commits where the test script failed.
4. Amended the broken commits.
5. Resolved a merge conflict in test.sh.
6. Continued the rebase until all commits passed.
7. Verified the solution successfully.

## Commands Used

git rebase -i --exec ./test.sh initial-commit

git commit --amend --no-edit

git rebase --continue

../verify.sh

## Learning

- git rebase --exec runs a command on every commit.
- git commit --amend updates the current commit.
- git rebase --continue resumes a paused rebase.
- Rebase can be used to ensure every commit passes tests.
