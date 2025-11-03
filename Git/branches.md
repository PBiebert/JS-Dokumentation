[Back to Table of Contents](../README.md)

# Git – Working with Branches

Branches are the central tool for parallel development and a clean commit history in Git. They allow you to test new features or bugfixes without affecting the main development line.

## Benefits and Use Cases

- Each branch is its own development environment
- Enables parallel teamwork
- Supports different release states (e.g. `main`, `dev`, `feature/*`, `bugfix/*`)
- Keeps history clear and understandable

## Typical Branch Names and Workflows

- **main**: Main development branch, contains stable code
- **dev**: Development branch for new features
- **feature/xyz**: For new features, e.g. `feature/login-system`
- **bugfix/xyz**: For bugfixes, e.g. `bugfix/login-error`

## Creating and Switching Branches

Create and switch to a new branch:

```bash
git checkout -b <branchname>
```

Or, more modern:

```bash
git switch -c <branchname>
```

Switch to an existing branch:

```bash
git checkout <branchname>
```

Or, more modern:

```bash
git switch <branchname>
```

List all branches:

```bash
git branch
```

Delete a branch:

```bash
git branch -d <branchname>
```

## Detached HEAD and Switching to Commits

Switch to a specific commit (detached HEAD):

```bash
git checkout <commit-id>
```

- HEAD now points directly to a commit, not a branch.
- Changes you make here are "dangling" and will be lost unless you create a new branch:

```bash
git checkout -b <new-branch>
```

## Key Points

- Use branches for every new task or bugfix.
- Switch between branches with `switch` or `checkout`.
- In detached HEAD state, always create a new branch if you want to keep your changes.

---

**See also:**

- [Undoing changes and commits](./aenderungen_und_commits_rueckgaengig.md)
- [Merge conflicts and undoing merges](./merge_commits.md)
