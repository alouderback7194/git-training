# Lesson 05 – Ignoring files with .gitignore

Not everything belongs in git. Dependencies, build output, logs, secrets, and
editor/OS junk should stay *out* of the repo. A **`.gitignore`** file tells git which
files and folders to leave untracked so they never get committed by accident.

## What to ignore (and why)

- **Dependencies** — e.g. `node_modules/` (huge, and reinstallable from `package.json`).
- **Build output** — compiled/generated files you can recreate.
- **Logs & temp files** — `*.log`, caches.
- **Secrets** — `.env`, API keys, credentials. **Never** commit these.
- **Editor / OS cruft** — `.DS_Store`, `.idea/`, sometimes `.vscode/`.

> **Key rule.** `.gitignore` only stops git from tracking files it isn't *already*
> tracking. If a file was already committed, adding it to `.gitignore` won't remove it —
> you must `git rm --cached <file>` first.

## How it works

Create a file named `.gitignore` in the repo root. Each line is a pattern:

```gitignore
node_modules/      # ignore a whole folder
*.log              # ignore every .log file
.env               # ignore one specific file
build/             # ignore build output
!keep.log          # exception: do NOT ignore keep.log
```

This repo already ships a [`.gitignore`](../.gitignore) — open it to see a real example.

## The commands

```bash
git status --ignored          # show ignored files too
git check-ignore -v foo.log   # explain WHY a file is ignored (which rule matched)
git rm --cached secret.txt    # stop tracking a committed file (keeps it on disk)
```

### In VS Code

- Ignored files appear **greyed out** in the Explorer and never show up under
  **Changes** in Source Control.
- Right-click a file in the Explorer or Source Control → **Add to .gitignore**, and VS
  Code appends the right pattern for you.

## Exercise

Do this on your own branch.

1. Create a throwaway log file:
   ```bash
   echo "debug output" > debug.log
   ```
2. Check status — because `.gitignore` already lists `*.log`, git ignores it:
   ```bash
   git status              # debug.log does NOT appear
   git status --ignored    # now you can see it, listed under "Ignored files"
   ```
3. Ask git to explain the match:
   ```bash
   git check-ignore -v debug.log
   ```
4. Now add a pattern yourself. Create a fake secrets file and ignore it:
   ```bash
   echo "API_KEY=12345" > .env
   echo ".env" >> .gitignore
   git status              # .env is ignored; only the .gitignore change shows
   ```
5. Commit the updated `.gitignore` — and notice `.env` and `debug.log` are never staged.

## Next

➡️ [Lesson 06 – Stashing work in progress](06-stash.md)
