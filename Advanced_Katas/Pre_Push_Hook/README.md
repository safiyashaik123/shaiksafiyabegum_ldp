# Pre Push Hook Kata

## Definition

Git Hooks are scripts that run automatically when specific Git events occur, such as commit, push, merge, or receive operations. They help automate tasks and enforce repository rules.

A Pre-Push Hook is a Git hook that runs before a `git push` operation. It can allow or block the push based on custom conditions.

## Objective

Learn how to use a pre-push hook to control push operations and enforce branch protection rules.

## What I Have Done

* Set up the pre-push hook kata repository.
* Installed the pre-push hook by copying the script into the `.git/hooks` directory.
* Checked the available hook files in the hooks folder.
* Attempted to push directly to the master branch and observed that the hook blocked the push.
* Created a new branch called `feature-test`.
* Successfully pushed the `feature-test` branch because the hook allowed non-master branches.
* Viewed and analyzed the pre-push hook script.
* Modified the hook by switching the `if` and `else` blocks.
* Tested the modified hook and observed that master pushes were allowed while feature branch pushes were blocked.

## Important Commands Used

### source setup.sh

Sets up the kata repository and required files.

### cp pre-push .git/hooks/pre-push

Copies and installs the pre-push hook.

### ls .git/hooks

Displays the available Git hooks.

### git push origin master

Tests pushing changes to the master branch.

### git switch -c feature-test

Creates and switches to a new branch.

### git branch

Displays available branches.

### git push origin feature-test

Pushes the feature branch to the remote repository.

### cat .git/hooks/pre-push

Displays the contents of the pre-push hook script.

### vi .git/hooks/pre-push

Edits the hook script.

### git switch master

Switches to the master branch.

### git switch feature-test

Switches to the feature-test branch.

## New Commands Learned

### cp pre-push .git/hooks/pre-push

Used to install a Git hook by copying it into the hooks directory.

### cat .git/hooks/pre-push

Used to view the contents of the hook script and understand its logic.

## What I Learned

* Git hooks are scripts that execute automatically during Git operations.
* A pre-push hook runs before a push operation.
* Hooks can be used to enforce branch protection policies.
* Direct pushes to protected branches can be prevented using hooks.
* `exit 0` allows a Git operation to continue.
* `exit 1` blocks a Git operation.
* Modifying hook logic changes the behavior of Git operations.

## Summary

Used a pre-push Git hook to prevent direct pushes to the master branch and enforce branch protection rules. Learned how Git hooks automate workflow policies and control push operations before code is pushed.

