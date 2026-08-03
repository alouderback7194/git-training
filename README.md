# Git & GitHub Training

Welcome! This repository is a hands-on playground for learning the everyday git and
GitHub workflow. Work through the lessons in order — each one is a short markdown
guide with copy-and-paste commands and an exercise you run against **your own copy**
of this repo.

**Your very first step is to fork this repo** (see Lesson 00) so you have a personal
copy to push to, branch, and break freely.

There is a small JavaScript app in [`src/`](src/) so that every exercise touches real
files (editing, committing, merging, resolving conflicts, and reviewing code).

---

## How this repo is organized

- **`main`** — always holds the full set of lessons (this folder) plus the sample app.
- **`lessons/`** — the curriculum, numbered in the order to teach them.
- **Demo branches** — pre-built branches used as the "playground" for specific
  exercises. When you fork, these come along with your copy — no need to create them.

| Demo branch | Used in lesson |
| --- | --- |
| `feature/add-greeting` | Pull Request, Merging a feature branch, Deleting a branch |
| `feature/spanish-greeting` | Merge conflicts & resolution |
| `feature/squash-me` | When to use squash |
| `feature/rebase-me` | Rebase |
| `feature/copilot-review` | Reviewing code with GitHub Copilot |

> First time here? Start with **[Lesson 00 – Setup](lessons/00-setup.md)** and fork the repo.

---

## Curriculum

| # | Lesson | Concept |
| --- | --- | --- |
| 00 | [Setup](lessons/00-setup.md) | Fork, install git, clone, configure |
| 01 | [Checking out](lessons/01-checkout.md) | Switching branches |
| 02 | [Committing a change](lessons/02-commit.md) | Staging & committing |
| 03 | [Pushing a change](lessons/03-push.md) | Sending commits to GitHub |
| 04 | [Fetch vs. Pull](lessons/04-fetch-vs-pull.md) | Getting others' changes |
| 05 | [Making a Pull Request](lessons/05-pull-request.md) | Proposing changes |
| 06 | [Merging a feature branch](lessons/06-merge-feature.md) | Integrating work |
| 07 | [Merge conflicts](lessons/07-merge-conflicts.md) | Resolving conflicts |
| 08 | [When to use squash](lessons/08-squash.md) | Tidying history |
| 09 | [Rebase](lessons/09-rebase.md) | Replaying commits |
| 10 | [Deleting a branch](lessons/10-delete-branch.md) | Cleanup, local & remote |
| 11 | [Code review with Copilot](lessons/11-copilot-review.md) | AI-assisted review |

---

## The sample app

```bash
npm start     # runs src/index.js
npm test      # runs the built-in Node test runner (no install needed)
```

No dependencies to install — the app uses only Node's standard library, so `npm test`
works out of the box with Node 18+.

## A note on terminology

You'll start by **forking** this repo (Lesson 00), so throughout these lessons
`origin` refers to **your own fork** on GitHub — the copy you push to and open PRs
against. The trainer's shared repo (`alouderback7194/git-training`) is optionally added as a
second remote named `upstream`, which you can pull updates from. `main` is the primary
branch you integrate finished work into.

Commands are shown for the command line; most can also be done from VS Code or the
GitHub website, and we'll point those out along the way.
