# Lesson 06 – Stashing work in progress

Sometimes you're mid-edit and need a *clean* working tree — to switch branches, pull
updates, or set your changes aside for a moment. **`git stash`** shelves your
uncommitted changes and hands you back a clean slate; you re-apply them whenever you're
ready. Think of it as a clipboard for "work I'm not ready to commit yet."

## The commands

```bash
git stash                 # shelve all uncommitted changes to tracked files
git stash -u              # also include new, untracked files
git stash list            # list your stashes: stash@{0}, stash@{1}, ...
git stash pop             # re-apply the most recent stash AND remove it from the list
git stash apply           # re-apply but KEEP it in the list
git stash show -p         # view the diff of what's stashed
git stash drop            # delete a stash without applying it
```

`pop` is the everyday one: stash → do the thing → `git stash pop` to get your work back.

## When it's handy

- "I need to quickly switch branches but I'm not done here."
- "I started editing on the wrong branch." → `git stash`, switch, `git stash pop`.
- "`git pull` says my local changes are in the way." → stash, pull, pop.

### In VS Code

- **Command Palette** (`Ctrl/Cmd+Shift+P`): `Git: Stash`, `Git: Stash (Include Untracked)`,
  `Git: Pop Stash`, `Git: Apply Stash`.
- The Source Control **`⋯` menu → Stash** has the same actions.
- With the **GitLens** extension, stashes get their own **STASHES** view where you can
  apply, pop, or inspect them with a click.

## Exercise

Do this on your own branch.

1. Start an edit but *don't* commit it — add a line to
   [`src/stringUtils.js`](../src/stringUtils.js):
   ```js
   // TODO: finish this later
   ```
2. Shelve it and confirm the tree is clean:
   ```bash
   git stash
   git status         # clean! your edit is safely shelved
   ```
3. See it on the shelf:
   ```bash
   git stash list
   ```
4. Do whatever you needed (e.g. `git switch main` and back), then bring your work back:
   ```bash
   git stash pop
   git status         # your TODO edit has returned
   ```

> **Tip.** Stashes aren't tied to a branch — you can `pop` a stash onto a *different*
> branch, which is exactly how you rescue work you started in the wrong place.

## Next

➡️ [Lesson 07 – Undoing changes & fixing mistakes](07-fixing-mistakes.md)
