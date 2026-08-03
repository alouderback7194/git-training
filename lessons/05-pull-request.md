# Lesson 05 – Making a Pull Request

A **Pull Request** (PR) is a GitHub feature — not a git command. It proposes merging
one branch into another and gives your team a place to review, discuss, and approve
the change before it lands on `main`.

## The flow

1. Create a branch and push it (Lessons 01–03).
2. Open a PR on GitHub: base = `main`, compare = your branch.
3. Teammates review and comment.
4. Address feedback with more commits (just push again — the PR updates automatically).
5. Merge (Lesson 06).

## How to open a PR

**From the website:** after pushing, GitHub shows a "Compare & pull request" banner.
Or go to the **Pull requests** tab → **New pull request** → pick your branch.

Give it a clear **title** and a **description**: what changed and why. Request a
reviewer.

## Exercise

We ship a ready-made branch, `feature/add-greeting`, that adds a personalized
greeting to the sample app. Use it to open your first PR.

1. Get the branch and push it (if it isn't on GitHub yet):
   ```bash
   git fetch origin
   git switch feature/add-greeting
   git push -u origin feature/add-greeting
   ```
2. On GitHub, open a Pull Request:
   - **base:** `main`  ←  **compare:** `feature/add-greeting`
3. Look at the **Files changed** tab — this is what reviewers see.
4. Write a description like: *"Adds a friendly, name-aware greeting to the app."*
5. Create the PR (leave it open — Lesson 06 merges it).

> **Tip.** Small PRs get reviewed faster and more thoroughly than giant ones.

## Next

➡️ [Lesson 06 – Merging a feature branch](06-merge-feature.md)
