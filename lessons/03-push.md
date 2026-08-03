# Lesson 03 – Pushing a change

**Pushing** uploads your local commits to the remote (`origin` on GitHub) so others
can see them and so your work is backed up.

## The commands

```bash
git push                              # push the current branch (if it's tracked)
git push -u origin playground/name    # first push of a NEW branch
```

The first time you push a branch that GitHub has never seen, you must tell git where
it goes with `-u origin <branch-name>`. The `-u` sets up *tracking* so that next time
plain `git push` (and `git pull`) just works.

### In VS Code

- **First push of a new branch:** the Source Control panel shows a **Publish Branch**
  button — click it and VS Code creates the branch on `origin` for you (no `-u` to
  remember).
- **After that:** click the **🔄 sync** icon in the status bar (bottom-left, next to
  the branch name), or use the Source Control **`⋯` menu → Push**.
- **Command Palette:** `Git: Push`, `Git: Publish Branch`.

## Exercise

Continuing with the commit you made in Lesson 02:

1. Push your branch for the first time:
   ```bash
   git push -u origin playground/<your-name>
   ```
2. Git prints a link to open a Pull Request — don't click it yet, that's Lesson 08.
3. Make another small edit, commit it, and push again — this time plain `git push` works:
   ```bash
   git add .
   git commit -m "Tweak shout() to trim whitespace"
   git push
   ```
4. Refresh the branch on **your fork** on GitHub
   (`https://github.com/YOUR-USERNAME/git-training/branches`) and confirm your commits
   are there.

> **Concept.** A commit that isn't pushed exists only on your laptop. Pushing early
> and often protects your work and lets teammates collaborate.

## Next

➡️ [Lesson 04 – Fetch vs. Pull](04-fetch-vs-pull.md)
