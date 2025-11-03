[Back to Table of Contents](../README.md)

# Git – Undoing Changes and Commits

In Git, there are several ways to undo changes or commits. The right command depends on whether your changes are local, staged, or already pushed to a remote repository.

## Overview: HEAD, Staging Area, Working Directory

| Command            | HEAD        | Staging Area | Working Directory | History                 |
| ------------------ | ----------- | ------------ | ----------------- | ----------------------- |
| reset --soft       | moves       | keeps        | keeps             | changes                 |
| reset --mixed      | moves       | resets       | keeps             | changes                 |
| reset --hard       | moves       | resets       | resets            | changes                 |
| revert             | new commit  | keeps        | keeps             | stays intact            |
| restore            | keeps       | optional     | optional          | stays intact            |
| checkout -- <file> | keeps       | keeps        | file restored     | stays intact            |
| commit --amend     | last commit | keeps        | keeps             | last commit overwritten |

## 1. git reset

`git reset` moves the HEAD pointer and can optionally change the staging area and working directory.

- **Soft Reset:**
  ```bash
  git reset --soft HEAD~1
  ```
  - Removes the last commit, changes stay staged.
- **Mixed Reset (default):**
  ```bash
  git reset --mixed HEAD~1
  ```
  - Removes the last commit, changes go back to the working directory.
- **Hard Reset:**
  ```bash
  git reset --hard HEAD~1
  ```
  - Removes the last commit and all changes in the working directory (cannot be undone!).

> **Warning:** `reset` rewrites history. Use only for local commits!

## 2. git revert

`git revert` creates a new commit that undoes an earlier commit. The history remains intact.

```bash
git revert <commitID>
```

- Safe for public branches, as history is preserved.
- Especially useful if a faulty commit has already been pushed.

## 3. git restore

`git restore` is used to restore files to a previous state.

- Restore working directory:
  ```bash
  git restore <file>
  ```
- Remove changes from staging area:
  ```bash
  git restore --staged <file>
  ```

## 4. git checkout (files/commits)

- Restore a file:
  ```bash
  git checkout -- <file>
  ```
  - Restores a file from the last commit.
- Switch to a specific commit (detached HEAD):
  ```bash
  git checkout <commit-id>
  ```
  - HEAD now points directly to a commit, not a branch.

> **Tip:** For switching branches and restoring files, `git switch` and `git restore` are now recommended.

## 5. Amend last commit

- Change the last commit message:
  ```bash
  git commit --amend
  ```
- Add files to the last commit:
  ```bash
  git add .
  git commit --amend
  ```
- **Warning:** Only use amend for local commits! For already pushed commits, only overwrite with `git push --force` (dangerous for teamwork).

## Key points

- Use `reset` for local changes, `revert` for public commits, and `restore` for targeted file restoration.
- `amend` is suitable for small corrections to the last commit, as long as it has not been pushed.
- When in doubt: prefer to preserve history (revert/restore) rather than delete (reset/hard).

---

**See also:**

- [Branches and switching](./branches_und_wechsel.md)
- [Merge conflicts and undoing merges](./merge_commits.md)
