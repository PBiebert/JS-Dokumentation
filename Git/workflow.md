[Back to Table of Contents](../README.md)

# Git – Typical Workflow

A structured workflow helps avoid errors and conflicts and ensures a clean version history.

## 1. Always Pull the Latest Changes First

Before you commit anything, you should pull the latest changes from the remote repository (e.g. GitHub):

```bash
git pull
```

- Fetches the latest changes from the remote (usually `origin main`) and integrates them into your local repository.

## 2. Stage Files for Commit

If you have edited one or more files:

```bash
git add file.txt
```

- Stages a file for the next commit.

Or stage all changes:

```bash
git add .
```

- Stages all changed files.

## 3. Create a Commit

Create a commit with a meaningful message:

```bash
git commit -m "Short, clear description of the change"
```

- Saves your changes permanently in the repository.

## 4. Push Changes

So others (or you on another computer) can see your changes:

```bash
git push
```

- Pushes your commits to the remote repository (e.g. GitHub).

## Short Version (always same order)

```bash
git pull               # 1. Pull latest changes
git add .              # 2. Stage changes
git commit -m "..."    # 3. Commit with message
git push               # 4. Push changes
```

## Useful Extras

- **Check status:**

  ```bash
  git status
  ```

  Shows which files have been changed or are already staged for commit.

- **View recent commit log:**

  ```bash
  git log --oneline --graph --decorate
  ```

  Shows the history in a concise and clear format.

- **Resolve conflicts after git pull:**
  1. Manually edit the conflicting sections in the affected files.
  2. Stage the changes again with `git add` and commit with `git commit`.
  3. Then push as usual with `git push`.

## Key Point

Stick to the order: `pull → add → commit → push`. This keeps your repository in sync and minimizes conflicts.
