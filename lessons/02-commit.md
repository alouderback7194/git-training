# Lesson 02 – Committing a change

A **commit** is a saved snapshot of your changes with a message describing them.
Making a commit is a two-step dance: **stage** what you want to save, then **commit**.

```
working files  --git add-->  staging area  --git commit-->  history
```

## The commands

```bash
git status                 # what's changed and what's staged
git add src/stringUtils.js # stage one file
git add .                  # stage everything that changed
git commit -m "Add title-case helper"
git log --oneline -3       # see your commit at the top
```

## Anatomy of a good commit message

- Short summary line (~50 chars), written as a command: *"Add title-case helper"*.
- Optional blank line + more detail explaining **why**, not just what.

### In VS Code

Open the **Source Control** panel (`Ctrl/Cmd+Shift+G`, or the branch icon in the
Activity Bar on the left).

1. Changed files appear under **Changes**. Click any file to see the diff.
2. Hover a file and click **+** to stage it — or click **+** on the **Changes** header
   to *Stage All Changes*.
3. Type your message in the box at the top, then click **✓ Commit** (or press
   `Ctrl/Cmd+Enter`).

**Command Palette:** `Git: Stage All Changes`, `Git: Commit`.

## Exercise

1. Make sure you're on your own branch (from Lesson 01) so you don't edit `main` directly:
   ```bash
   git switch -c playground/<your-name>   # skip if you already made it
   ```
2. Add a new function to [`src/stringUtils.js`](../src/stringUtils.js), for example:
   ```js
   export function shout(text) {
     return text.toUpperCase() + "!";
   }
   ```
3. See what git noticed:
   ```bash
   git status
   git diff              # the exact lines you changed
   ```
4. Stage and commit:
   ```bash
   git add src/stringUtils.js
   git commit -m "Add shout() helper to stringUtils"
   ```
5. Confirm:
   ```bash
   git log --oneline -3
   ```

Your commit currently lives only on your computer. Next, we send it to GitHub.

## Next

➡️ [Lesson 03 – Pushing a change](03-push.md)
