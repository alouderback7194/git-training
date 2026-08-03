# Lesson 07 – Undoing changes & fixing mistakes

Everyone makes mistakes in git — staged the wrong file, wrote a bad commit message,
committed to the wrong branch, or pushed something you shouldn't have. The good news:
**almost everything in git is recoverable.** This lesson is your safety toolkit.

The right tool depends on *where* the mistake is: in your working files, in the staging
area, in your last commit, or already pushed.

## 1. Discard changes in your working files (not yet staged)

You edited a file and want to throw the edit away, back to the last commit:

```bash
git restore src/calculator.js    # discard changes to one file
git restore .                    # discard ALL unstaged changes
```

> ⚠️ This **permanently** deletes uncommitted work — there's no undo. Use with care.

## 2. Unstage a file (you ran `git add` too early)

```bash
git restore --staged src/calculator.js   # unstage, but KEEP your edits
```

## 3. Fix your most recent commit

Wrong message, or forgot to include a file:

```bash
git commit --amend -m "A better message"     # rewrite the last commit's message
# ...or stage the forgotten file, then keep the message:
git add forgotten.js
git commit --amend --no-edit
```

> ⚠️ Amending **rewrites** the commit. Perfect before you push. If you already pushed,
> you'd need a force-push (`--force-with-lease`) and should coordinate with your team.

## 4. Undo a whole commit — two very different tools

| | `git revert` | `git reset` |
| --- | --- | --- |
| What it does | Makes a **new** commit that undoes an old one | **Moves your branch pointer** back in time |
| Safe on pushed / shared history? | ✅ Yes | ⚠️ No — it rewrites history |
| Reach for it when | The commit is already pushed | The commit is local-only |

```bash
git revert <commit-sha>     # safe undo: creates an "undo" commit on top

git reset --soft HEAD~1     # undo last commit, KEEP its changes staged
git reset --mixed HEAD~1    # undo last commit, keep changes unstaged (the default)
git reset --hard HEAD~1     # undo last commit AND discard its changes (dangerous!)
```

**Rule of thumb:** `revert` for anything already shared; `reset` only for local commits
you haven't pushed.

## 5. The ultimate safety net: `git reflog`

Think you lost commits after a bad `reset` or `rebase`? `git reflog` records everywhere
`HEAD` has been, so you can jump back:

```bash
git reflog                  # e.g.  abc1234 HEAD@{1}: reset: moving to HEAD~1
git reset --hard abc1234    # return to that exact point and recover your work
```

### In VS Code

- **Discard working changes:** in **Source Control**, hover a file under *Changes* and
  click the **↩ Discard Changes** icon (= `git restore`). The header has *Discard All*.
- **Unstage:** hover a *Staged* file and click the **−** icon (= `git restore --staged`).
- **Amend the last commit:** open the commit box's **`⋯` menu → Commit → Amend Last
  Commit**, or Command Palette and search **Amend**.
- **Revert a commit:** right-click the commit in the **Source Control Graph** (or in
  **GitLens**) → **Revert Commit**.
- `reset` and `reflog` aren't first-class in the built-in UI — **GitLens** exposes them
  (right-click a commit → *Reset*, plus a *Reflog* view). Otherwise use the CLI.

## Exercise

Practice each recovery on your own branch — none of it touches anyone else's work.

1. **Discard:** edit `src/stringUtils.js`, then throw the edit away:
   ```bash
   git restore src/stringUtils.js
   ```
2. **Unstage:** edit and `git add` a file, then unstage it (keeping the edit):
   ```bash
   git add src/stringUtils.js
   git restore --staged src/stringUtils.js
   ```
3. **Amend:** make a commit with a typo, then fix the message:
   ```bash
   git commit -am "Add helpr"     # oops
   git commit --amend -m "Add helper"
   ```
4. **Reset:** make a throwaway commit, undo it while keeping the changes, and check
   `git log` before and after:
   ```bash
   git reset --soft HEAD~1
   ```
5. **Reflog:** run `git reflog` and read your last several moves — this is the command
   that rescues you when something goes wrong.

## Next

➡️ [Lesson 08 – Making a Pull Request](08-pull-request.md)
