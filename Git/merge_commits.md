[Back to Table of Contents](../README.md)

# Git – Merge Commits and Undoing Merges

## 1. Basics of a Merge Commit

- A merge commit connects two or more branches.
- It has at least two parent commits:
  - `HEAD^1`: first parent commit (usually the branch you were on)
  - `HEAD^2`: second parent commit (the branch that was merged in)

**Example:**

```bash
git show HEAD         # Shows the merge commit
git show HEAD^1       # Shows the first parent commit
git show HEAD^2       # Shows the second parent commit
```

## 2. Abort a Merge (while in progress)

If you started a merge but encounter conflicts or want to stop:

```bash
git merge --abort
```

- Aborts the ongoing merge and restores the state before the merge.

## 3. Undo a Merge (after it was committed)

### Option 1: Using git reset (local only!)

If the merge commit has not been pushed yet:

```bash
git reset --hard HEAD~1
```

- Deletes the merge commit and goes one step back.
- **Warning:** Only use if the commit has not been pushed to remote!

### Option 2: Using git revert (recommended for remote!)

A merge commit is special, so you need `-m` ("mainline") to specify which parent to keep working from.

```bash
git revert -m 1 <merge-commit-id>
```

- `-m 1` → keep the first parent commit (`HEAD^1`)
- `-m 2` → keep the second parent commit (`HEAD^2`)

**Example:**

```bash
git log --oneline
# e3a1b2c Merge branch 'feature'
# a7f8d3e Add new feature
# 9c5b7f1 Initial commit


```

- Creates a new commit that undoes the merge and continues from the first parent commit.
- Advantage: History stays clean, even if the merge was already pushed.

## 4. Redo a Merge

If you want to redo the merge after a reset or revert:

```bash
git merge feature-branch
```

- Starts the merge again.
- If conflicts occur: edit the files, resolve the conflicts, then:

```bash
git add <changed-file>
git commit
```

## 5. Handling Merge Conflicts

- If conflicts occur, Git marks them in the files.
- Edit the affected files, resolve the conflicts, and continue as described above.

## Key Point

Merges can be safely undone – locally with `reset`, on remote with `revert -m`. If you encounter conflicts: stay calm, resolve them carefully, and commit cleanly.
