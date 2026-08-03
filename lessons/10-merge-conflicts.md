# Lesson 10 – Merge conflicts & resolution

A **merge conflict** happens when two branches change the *same lines* of the *same
file* in different ways. Git can't decide which version is right, so it stops and asks
**you** to resolve it. Conflicts are normal — not a mistake.

## Setup in this repo

Both `main` and the demo branch `feature/spanish-greeting` edit the **same line** of
[`src/greeting.js`](../src/greeting.js):

- `main` changed the greeting to an English variant.
- `feature/spanish-greeting` changed it to a Spanish variant.

Merging them will conflict — exactly what we want to practice.

## Trigger the conflict

```bash
git switch main
git pull                              # make sure main is current
git merge feature/spanish-greeting
```

Git stops with a message like `CONFLICT (content): Merge conflict in src/greeting.js`.

## Read the conflict markers

Open `src/greeting.js`. Git inserted markers:

```js
<<<<<<< HEAD
  return `Hello there, ${name}!`;     // the version on main
=======
  return `¡Hola, ${name}!`;           // the version from feature/spanish-greeting
>>>>>>> feature/spanish-greeting
```

- `<<<<<<< HEAD` … `=======` is **your current branch** (`main`).
- `=======` … `>>>>>>>` is the **incoming branch**.

## Resolve it

1. Edit the file to what you actually want — keep one side, the other, or combine them.
   Then **delete all three marker lines** (`<<<<<<<`, `=======`, `>>>>>>>`).
   For example, keep both languages:
   ```js
   return `Hello / ¡Hola, ${name}!`;
   ```
2. Mark it resolved and finish the merge:
   ```bash
   git add src/greeting.js
   git commit                # completes the merge (default message is fine)
   ```
3. Verify and publish:
   ```bash
   git status                # "nothing to commit, working tree clean"
   npm start                 # see your resolved greeting
   git push
   ```

> **Bail out.** Made a mess mid-merge? `git merge --abort` returns you to exactly
> where you were before the merge.

### In VS Code

VS Code makes conflict resolution visual — often easier than editing markers by hand:

- Conflicted files appear in **Source Control** under a **Merge Changes** group.
- Open the file: each conflict shows CodeLens buttons — **Accept Current Change**,
  **Accept Incoming Change**, **Accept Both Changes**, and **Compare Changes** — right
  above the markers.
- For a side-by-side view, click **Resolve in Merge Editor**: *Current* (yours) on the
  left, *Incoming* (theirs) on the right, and the editable **Result** at the bottom.
  Tick the changes you want, tweak the Result, then click **Complete Merge**.
- Once every conflict is resolved, **stage** the file(s) and **commit** in the Source
  Control panel to finish the merge — the equivalent of the `git add` + `git commit`
  above.

## Next

➡️ [Lesson 11 – When to use squash](11-squash.md)
