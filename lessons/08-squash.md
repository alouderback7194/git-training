# Lesson 08 – When to use squash

**Squashing** combines several commits into one. It's about keeping history *readable*:
a feature that took 8 messy "wip", "fix typo", "oops" commits can land on `main` as a
single clean commit.

## When to squash (and when not to)

**Good times to squash:**
- Your branch has lots of tiny "checkpoint" commits that don't mean anything on their own.
- You want `main`'s history to read as one clean commit per feature.
- Cleaning up before merging a PR.

**Avoid squashing when:**
- Each commit is meaningful and you want to preserve that story.
- The branch is shared and others have based work on those exact commits (squashing
  rewrites them).

## The easy way: Squash and merge on GitHub

On a PR, choose **Squash and merge**. GitHub collapses every commit on the branch into
one commit on `main` and lets you edit the final message. This is the most common way
teams squash — no command line needed.

### In VS Code

Squashing is one place VS Code's built-in git UI falls short — there's **no native
command** for interactive rebase/squash. Two good options:

- **Easiest — do it on GitHub:** the **Squash and merge** button on the PR (below).
- **GitLens extension:** provides an **Interactive Rebase** editor where you drag
  commits and mark them `squash`/`fixup` — the `git rebase -i` experience in a GUI.

## Exercise

The demo branch `feature/squash-me` deliberately contains several noisy commits that
build one small feature (a `titleCase` helper).

1. Look at the messy history:
   ```bash
   git fetch origin
   git switch feature/squash-me
   git log --oneline main..feature/squash-me
   ```
   You'll see commits like *"wip"*, *"fix typo"*, *"actually fix it"* — noise.
2. Push it and open a PR (base `main` ← compare `feature/squash-me`). Remember the
   fork gotcha from Lesson 05: set the **base repository** to your own fork.
   ```bash
   git push -u origin feature/squash-me
   ```
3. On the PR, click the merge dropdown → **Squash and merge**. Edit the combined
   message to something clean like *"Add titleCase() helper"* and confirm.
4. Check `main` — all that noise is now a single tidy commit:
   ```bash
   git switch main && git pull
   git log --oneline -3
   ```

> **Command-line alternative.** `git rebase -i main` opens an editor where you mark
> commits as `squash` (or `fixup`) to combine them locally before pushing.

## Next

➡️ [Lesson 09 – Rebase](09-rebase.md)
