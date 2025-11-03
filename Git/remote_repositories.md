[Back to Table of Contents](../README.md)

# Git – Connecting and Syncing Remote Repositories

With `git remote add` you link a remote repository (e.g. on GitHub) to your local repository. You can then push your changes or pull updates from the remote.

## 1. Add a Remote

```bash
git remote add origin <URL>
```

Example:

```bash
git remote add origin https://github.com/PBiebert/Github-remote-repo-test.git
```

- `origin` is the name of the remote repository (default, but can be any name).

## 2. Rename Branch (optional)

```bash
git branch -M main
```

- Makes the current branch `main`.
- Note: In some projects, the default branch is still `master`. Adjust if needed:

```bash
git branch -M master
```

## 3. Push Changes to Remote (initial setup)

```bash
git push -u origin main
```

- `-u` sets up tracking: your local branch is linked to the remote branch.
- After this, `git push` and `git pull` are enough, no need to specify remote and branch every time.

**Important:**

- Check your default branch name (`main` or `master`).
- `git remote add` is only needed once per remote.

## 4. Push Changes to Remote (after initial setup)

If you already ran `git push -u origin main`, for further uploads just use:

```bash
git push
```

- Pushes all new commits from your local branch to the remote.
- Useful for ongoing work, as remote and local branch are already linked.

## 5. Pull Changes from Remote

If there are new commits in the remote repository (e.g. from teammates or direct changes on GitHub), you can fetch them locally:

```bash
git pull
```

- Fetches new commits from the linked remote branch and automatically merges them with your local state.
