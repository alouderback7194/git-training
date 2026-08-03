# Lesson 09 – Rebase

**Rebasing** moves your branch so it starts from the *latest* tip of another branch
(usually `main`). Instead of merging `main` into your branch, you replay *your* commits
on top of the newest `main`, giving a clean, linear history with no merge commits.

## Merge vs. rebase — the picture

```
Before:            After MERGE main:          After REBASE onto main:

main:  A---B---C   main:  A---B---C            main:  A---B---C
        \                  \       \                          \
feat:    D---E      feat:   D---E---M(merge)    feat:          D'--E'
```

- **Merge** preserves history exactly and adds a merge commit `M`.
- **Rebase** rewrites your commits as `D'`/`E'` sitting cleanly on top of `main`.

## The commands

```bash
git switch feature/rebase-me
git fetch origin
git rebase origin/main        # replay my commits on top of the latest main
# ...fix any conflicts, then:
git rebase --continue
```

Because rebase **rewrites commits**, only rebase branches that are yours / not yet
shared, or coordinate with your team first. After rebasing a branch you already
pushed, you'll need `git push --force-with-lease`.

## Exercise

The demo branch `feature/rebase-me` was created from an *older* `main`, so `main` has
moved ahead of it. We'll rebase it onto the current `main`.

1. See the divergence:
   ```bash
   git fetch origin
   git switch feature/rebase-me
   git log --oneline --graph --all -8
   ```
2. Rebase onto the latest `main`:
   ```bash
   git rebase origin/main
   ```
3. If a conflict appears, resolve it like Lesson 07, then:
   ```bash
   git add <file>
   git rebase --continue
   ```
4. Look at the history now — your commits sit right on top of `main`, linear and clean:
   ```bash
   git log --oneline --graph --all -8
   ```

> **Abort anytime.** `git rebase --abort` puts everything back the way it was.

> **Rule of thumb.** Rebase to *update* your own feature branch with the latest `main`;
> merge to *integrate* a finished feature into `main`.

## Next

➡️ [Lesson 10 – Deleting a branch](10-delete-branch.md)
