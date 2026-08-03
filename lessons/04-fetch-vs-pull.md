# Lesson 04 – Fetch vs. Pull

Both commands bring changes *down* from GitHub, but they differ in one important way:

| | `git fetch` | `git pull` |
| --- | --- | --- |
| Downloads new commits from `origin` | ✅ | ✅ |
| Changes your current branch / working files | ❌ | ✅ |
| = | Look, don't touch | **fetch + merge** |

**`git pull` is literally `git fetch` followed by `git merge`.** Fetch lets you inspect
what changed *before* you integrate it; pull does both in one step.

## The commands

```bash
git fetch origin              # download latest, update remote-tracking branches only
git log HEAD..origin/main --oneline   # what did I just fetch that I don't have yet?
git merge origin/main         # now integrate it into my current branch

git pull                      # do the fetch + merge in one go
```

## Why fetch first?

Fetching is always safe — it never changes your working files, so it can't create a
conflict or interrupt what you're doing. A common habit is:

```bash
git fetch                     # safe: see what's new
git status                    # "your branch is behind origin/main by 3 commits"
git pull                      # integrate when you're ready
```

## Exercise

1. Fetch without changing anything:
   ```bash
   git fetch origin
   ```
2. Compare your local `main` to the remote `main`:
   ```bash
   git switch main
   git log --oneline HEAD..origin/main    # commits on origin you don't have yet
   ```
3. Bring them in:
   ```bash
   git pull
   ```
4. Run it again — notice "Already up to date." because pull already fetched + merged.

## Next

➡️ [Lesson 05 – Making a Pull Request](05-pull-request.md)
