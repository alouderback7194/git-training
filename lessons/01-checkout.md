# Lesson 01 – Checking out

**Checking out** switches which branch (or point in history) your working files
reflect. When you check out a branch, git rewrites the files in your folder to match
that branch.

## The commands

```bash
git branch -a                     # see every branch, local and remote
git checkout main                 # switch to an existing branch
git switch main                   # modern equivalent of the line above
git checkout -b my-new-branch     # create AND switch to a new branch
git switch -c my-new-branch       # modern equivalent
```

> `git switch` is the newer, clearer command for changing branches; `git checkout`
> still works and does the same thing (plus more). Use whichever your team prefers.

### In VS Code

- **Status bar (fastest):** the current branch name shows at the **bottom-left**. Click
  it to open a branch picker — choose a branch to check out, or **+ Create new branch…**.
- **Command Palette** (`Ctrl/Cmd+Shift+P`):
  - `Git: Checkout to…` — switch to an existing local or remote branch.
  - `Git: Create Branch…` — create a new branch and switch to it.

## Exercise

This repo ships with several demo branches. Let's move between them.

1. Confirm where you are:
   ```bash
   git status
   ```
2. List all branches (look for the `feature/*` demo branches):
   ```bash
   git branch -a
   ```
3. Check out the greeting feature branch and notice the files change:
   ```bash
   git checkout feature/add-greeting
   ```
   Open [`src/greeting.js`](../src/greeting.js) — it looks different here than on `main`.
4. Switch back to `main`:
   ```bash
   git switch main
   ```
5. Create your own branch to experiment on:
   ```bash
   git switch -c playground/<your-name>
   ```

> **Tip.** You can't switch branches if you have uncommitted changes that would be
> overwritten. Either commit them (Lesson 02) or stash them with `git stash`.

## Next

➡️ [Lesson 02 – Committing a change](02-commit.md)
