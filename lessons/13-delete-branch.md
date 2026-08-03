# Lesson 13 – Deleting a branch (local & remote)

Once a feature branch is merged, it has done its job. Deleting it keeps the branch list
tidy. A branch lives in **two places** — your computer (local) and GitHub (remote) — so
there are two deletes.

## The commands

```bash
# Local
git branch -d feature/add-greeting     # safe delete: refuses if not merged
git branch -D feature/add-greeting     # force delete: even if unmerged (careful!)

# Remote (on GitHub)
git push origin --delete feature/add-greeting
```

`-d` (lowercase) protects you: it won't delete a branch whose commits aren't merged
yet, so you can't lose work by accident. `-D` overrides that check — only use it when
you truly want to throw the branch away.

## Clean up stale remote-tracking references

After teammates delete branches on GitHub, your local list still shows them until you
prune:

```bash
git fetch --prune        # remove local references to branches deleted on the remote
```

## From the website

On GitHub, a merged PR shows a **Delete branch** button — one click removes the remote
branch. The **Branches** page also has a trash icon next to each branch.

### In VS Code

- **Delete a *local* branch — Command Palette:** `Git: Delete Branch…` → pick the
  branch. (Switch off it first — you can't delete the branch you're on.)
- **Prune stale remote-tracking branches:** `Git: Fetch (Prune)`.
- **Deleting the *remote* branch** isn't a built-in command — use the GitHub website's
  **Delete branch** button, the **GitLens** extension, or the CLI command above.

## Exercise

Use the branch you merged back in Lesson 09 (`feature/add-greeting`).

1. Switch off the branch first (you can't delete the branch you're standing on):
   ```bash
   git switch main
   ```
2. Delete it locally:
   ```bash
   git branch -d feature/add-greeting
   ```
   If git says it isn't fully merged but you know it is (or don't need it), use `-D`.
3. Delete it on GitHub:
   ```bash
   git push origin --delete feature/add-greeting
   ```
4. Confirm it's gone everywhere:
   ```bash
   git fetch --prune
   git branch -a
   ```

## Next

➡️ [Lesson 14 – Code review with Copilot](14-copilot-review.md)
