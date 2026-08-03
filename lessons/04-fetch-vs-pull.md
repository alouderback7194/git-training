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

### In VS Code

- **Fetch (safe):** Source Control **`⋯` menu → Fetch**, or Command Palette
  `Git: Fetch`. After fetching, the status-bar sync icon shows **↓ n** commits waiting
  to come in (and **↑ n** waiting to push).
- **Pull:** **`⋯` menu → Pull**, or `Git: Pull`. The **🔄 sync** button does a pull
  **and** push in one click.
- **Pull from a specific remote** (e.g. `upstream`): Command Palette `Git: Pull from…`,
  then pick the remote and branch.
- **Prune branches deleted on the remote:** `Git: Fetch (Prune)`.

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

## In a fork setup: pulling from `upstream`

Your `origin` is your own fork, so it only changes when *you* push. To pull in updates
the trainer makes to the original repo, use the `upstream` remote you added in
Lesson 00:

```bash
git fetch upstream                 # safe look at what changed upstream
git switch main
git merge upstream/main            # or: git pull upstream main
git push                           # update your fork's main too
```

This is the real-world version of "getting everyone else's changes": `fetch`/`pull`
from `upstream`, then `push` to `origin`.

## Next

➡️ [Lesson 05 – Ignoring files with .gitignore](05-gitignore.md)
