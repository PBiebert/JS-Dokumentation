[Back to Table of Contents](../README.md)

# Git – Step-by-Step: From Initialization to Remote Repository

This guide shows the typical first steps when starting a new project with Git, including branch renaming and connecting to a remote repository.

---

## 1. Create a New Project Directory

Create and enter your new project folder:

```bash
mkdir my-project
cd my-project
```

---

## 2. Initialize a Local Git Repository

```bash
git init
```

This creates a hidden `.git` folder and turns your directory into a Git repository.

---

## 3. (Optional) Rename Default Branch to `main`

By default, Git may use `master` as the main branch. To rename it to `main` (recommended):

```bash
git branch -m main
```

---

## 4. Add Files and Make Your First Commit

Add all files (or specific files) to the staging area:

```bash
git add .
```

Commit your changes:

```bash
git commit -m "Initial commit"
```

---

## 5. Create a New Remote Repository (e.g. on GitHub)

Go to GitHub (or another Git hosting service) and create a new, empty repository. Do not initialize it with a README or .gitignore if you already have those locally.

---

## 6. Connect Local Repository to Remote

Replace `<URL>` with your repository's URL (e.g. `https://github.com/username/my-project.git`):

```bash
git remote add origin <URL>
```

---

## 7. Push Your Local Branch to Remote

```bash
git push -u origin main
```

The `-u` flag sets `origin/main` as the default upstream branch.

---

## 8. Check Status and Workflow

Check the status of your working directory and staging area:

```bash
git status
```

---

## 9. Typical Workflow (Summary)

1. Make changes to your files
2. Stage changes: `git add .`
3. Commit: `git commit -m "your message"`
4. Push: `git push`

---

This covers the essential first steps for every new Git project, from initialization to remote setup and first push.
