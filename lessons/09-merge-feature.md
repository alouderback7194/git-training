# Lesson 09 – Merging a feature branch

**Merging** takes the commits from a feature branch and integrates them into another
branch (usually `main`). Most of the time you'll merge by clicking **Merge pull
request** on GitHub, but it's worth understanding what happens underneath.

## Merge from the PR (the usual way)

On the PR page, click **Merge pull request**. GitHub offers three buttons:

- **Create a merge commit** — keeps every commit from the branch plus a "merge commit"
  that ties the histories together. Full history, most detail.
- **Squash and merge** — combines all the branch's commits into one. (Lesson 11.)
- **Rebase and merge** — replays the branch's commits onto `main` with no merge commit.
  (Lesson 12.)

For this lesson, use **Create a merge commit**.

## Merge from the command line

```bash
git switch main
git fetch origin
git pull                         # make sure main is up to date first
git merge feature/add-greeting   # bring the feature branch in
git push                         # publish the merged main
```

If the branches haven't diverged, git does a **fast-forward** (just moves the pointer).
If both branches have new commits, git makes a **merge commit**.

### In VS Code

- **Command Palette:** `Git: Merge Branch…` → pick the branch to merge **into your
  current branch**. (So check out `main` first, then merge in `feature/add-greeting`.)
- When the work is in a PR, the **Merge** button on the PR — on the GitHub website or
  in the **GitHub Pull Requests** extension — is still the usual way to merge.

## Exercise

Continuing from the PR you opened in Lesson 08:

1. On the PR page, click **Merge pull request** → **Create a merge commit** → confirm.
2. Update your local `main` to see the merged result:
   ```bash
   git switch main
   git pull
   git log --oneline -5      # your feature's commits are now on main
   ```
3. Run the app to see the change live:
   ```bash
   npm start
   ```

## Next

➡️ [Lesson 10 – Merge conflicts](10-merge-conflicts.md)
