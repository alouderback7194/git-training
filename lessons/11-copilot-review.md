# Lesson 11 – Reviewing code with GitHub Copilot

GitHub Copilot can act as an automated **code reviewer**. It reads a pull request (or
your working changes) and suggests bugs, edge cases, and improvements — a helpful first
pass before a human reviews.

## Two ways to use it

### A. Copilot review on a Pull Request (GitHub website)
1. Open a PR.
2. In the **Reviewers** box on the right, add **Copilot**.
3. Copilot posts review comments inline on the diff within a minute or two.
4. Read each suggestion, and resolve or reply just like a human review comment.

### B. Copilot in VS Code (before you even push)
1. Open the **Source Control** panel with your changes staged.
2. Use **Copilot → Review changes** (or the "Generate" / review action in the Copilot
   Chat panel) to get feedback on your working diff.
3. Or ask Copilot Chat directly: *"Review src/calculator.js for bugs and edge cases."*

> Treat Copilot's review as a *suggestion*, not gospel. You decide what to accept.

## Exercise

The demo branch `feature/copilot-review` adds a few functions to
[`src/calculator.js`](../src/calculator.js) that contain **intentional issues** — a
missing edge case, a subtle bug, and a naming nit — perfect fodder for a reviewer.

1. Push the branch and open a PR:
   ```bash
   git fetch origin
   git switch feature/copilot-review
   git push -u origin feature/copilot-review
   ```
   Open a PR: base `main` ← compare `feature/copilot-review`. (As in Lesson 05, make
   sure the **base repository** is your own fork.)
2. Add **Copilot** as a reviewer (Reviewers box).
3. Wait for Copilot's comments, then discuss as a group:
   - Which issues did it catch? (Look for the divide-by-zero gap and the `average`
     bug.)
   - Did it miss anything a human would flag?
   - Are any of its suggestions wrong or unnecessary?
4. Fix the issues it found, commit, and push — watch the PR update.

> **Takeaway.** AI review is a fast, tireless first pass that catches routine issues so
> human reviewers can focus on design and intent.

## 🎉 You're done!

You've covered the full everyday git & GitHub workflow. Head back to the
[README](../README.md) any time as a reference.
