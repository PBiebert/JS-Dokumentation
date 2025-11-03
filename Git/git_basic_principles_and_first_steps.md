[Back to Table of Contents](../README.md)

# Git – Basic Principles and First Steps

## 1. Working Directory

The working directory is the folder where you actively work on your files.

- Changes here are only visible locally.
- They are not saved in Git until you add them to the staging area.

## 2. Creating a Git Repository

The following command creates a hidden `.git` subfolder in the current directory:

```bash
git init
```

- This folder turns your workspace into a Git repository.
- It stores all version control information.

## 3. Structure of a Git Repository

A repository consists of three areas:

| Area                 | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| Working Directory    | Folder with the files you are currently working on         |
| Staging Area (Index) | Temporary area for changes prepared for a commit           |
| Commits (History)    | Collection of all permanently saved versions of your files |

## 4. Adding Changes to the Staging Area

The following command adds changes in the specified file to the staging area:

```bash
git add <filename>
```

Example:

```bash
git add style.css
```

- You can also add multiple files at once:

```bash
git add file1.txt file2.txt
```

- Or add all changes in the current folder:

```bash
git add .
```

## 5. Saving Changes Permanently (Commit)

The following command saves the current state of the staging area permanently in the commit history:

```bash
git commit -m "Short description of the change"
```

Example:

```bash
git commit -m "style.css: Adjusted colors"
```

- The commit message should concisely describe what was changed.

## 6. Checking the Status of the Working Directory

The following command shows the current state of the working directory and the staging area:

```bash
git status
```

- Shows:
  - Which files have been changed
  - Which files are ready to commit
  - Which files are still untracked (new, not yet versioned)
