# Lesson 00 – Setup

Before the exercises, make sure your machine is ready **and grab your own copy of the
repo by forking it.**

## 1. Prerequisites

- **Git** — check with `git --version`. If missing, install from <https://git-scm.com/downloads>.
- **A GitHub account** — you'll need one to fork the repo in the next step.
- **VS Code** (recommended) with these extensions:
  - **GitHub Copilot** — for the code-review exercise (Lesson 14).
  - **GitHub Pull Requests** — create and review PRs without leaving the editor (Lessons 08–09).
  - **GitLens** *(optional)* — adds the interactive-rebase / squash UI that VS Code lacks (Lessons 11–12).
- **Node.js 18+** (optional) — only needed if you want to run the sample app (`npm start`).

## 2. Fork the repository (your Step 0!)

A **fork** is your own personal copy of a repository under your GitHub account. You can
push, branch, merge, and make PRs in your fork without touching anyone else's work —
perfect for a training sandbox.

1. Go to <https://github.com/alouderback7194/git-training>.
2. Click **Fork** (top-right) → **Create fork**.
3. GitHub creates **`YOUR-USERNAME/git-training`** — a full copy, including all the
   demo branches you'll use in later lessons.

> **Concept — fork vs. clone vs. branch.** A **fork** is a server-side copy on GitHub
> under *your* account. A **clone** is a copy on *your computer*. A **branch** is a
> line of work *inside* a repo. In this training you'll fork once, clone once, and
> make many branches.

## 3. Tell git who you are

These values are stamped onto every commit you make. Set them once:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@nptrust.org"
```

## 4. Clone YOUR fork

Clone the fork you just created (not the original). Replace `YOUR-USERNAME`:

```bash
git clone https://github.com/YOUR-USERNAME/git-training.git
cd git-training
```

> **Tip.** The exact URL is on your fork's page under the green **Code** button.

## 5. (Optional) Connect to the original repo as `upstream`

Your fork's remote is called `origin`. If you also want to pull in updates that the
trainer makes to the original repo, add it as a second remote named `upstream`:

```bash
git remote add upstream https://github.com/alouderback7194/git-training.git
git remote -v          # origin = your fork, upstream = the original
```

- **`origin`** — your fork. You **push** here.
- **`upstream`** — the shared original. You **pull** updates from here (see Lesson 04).

## 6. Look around

```bash
git status            # what branch am I on? any changes?
git branch            # list local branches
git branch -r         # list remote branches (the demo branches live here)
git log --oneline -5  # recent history
```

## 7. VS Code essentials (if you'd rather click than type)

Every lesson shows the CLI command **and** an **"In VS Code"** section. Three UI spots
do almost everything:

- **Source Control panel** — `Ctrl/Cmd+Shift+G`, or the branch icon in the Activity
  Bar. Stage, commit, push, pull, and resolve conflicts here.
- **Command Palette** — `Ctrl/Cmd+Shift+P`, then type `Git:` to see every git command
  (checkout, merge, rebase, fetch, …).
- **Status bar** — bottom-left shows your **current branch** (click to switch/create)
  and a **🔄 sync** button (pull + push).

## Next

➡️ [Lesson 01 – Checking out](01-checkout.md)
