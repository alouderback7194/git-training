# Lesson 00 – Setup

Before the exercises, make sure your machine is ready.

## 1. Install the tools

- **Git** — check with `git --version`. If missing, install from <https://git-scm.com/downloads>.
- **A GitHub account** — you'll need access to the `nptrust/git-training` repo.
- **VS Code** (recommended) with the **GitHub Copilot** extension for Lesson 11.
- **Node.js 18+** (optional) — only needed if you want to run the sample app (`npm start`).

## 2. Tell git who you are

These values are stamped onto every commit you make. Set them once:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@nptrust.org"
```

## 3. Clone the repository

Cloning downloads the whole repo (all branches and history) to your computer.

```bash
git clone https://github.com/nptrust/git-training.git
cd git-training
```

## 4. Look around

```bash
git status            # what branch am I on? any changes?
git branch            # list local branches
git branch -r         # list remote branches (the demo branches live here)
git log --oneline -5  # recent history
```

> **Concept — local vs. remote.** After cloning you have a *local* copy. The GitHub
> copy is the *remote*, nicknamed `origin`. Almost every git command is you moving
> commits between these two places.

## Next

➡️ [Lesson 01 – Checking out](01-checkout.md)
