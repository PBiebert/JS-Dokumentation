[Back to Table of Contents](../README.md)

# Git – Merge Conflicts

A merge conflict occurs when multiple people work on the same file or even the same line at the same time.

- Git cannot automatically merge the changes in this case.
- An error occurs because Git does not know which change to keep.

## Steps in a Merge Conflict

1. **Git/GitHub detects and marks the conflict.**
2. In VS Code, a special window opens:
   - **Incoming:** Code from the other developer / remote branch
   - **Current:** Your own code / local branch
   - **Result:** Preview of how the file will look after merging
3. **Options in VS Code:**
   - Accept or ignore changes
   - Select individual blocks or combine both
4. **Finish:**
   - After editing, mark the conflict as resolved
   - Commit (`git commit`) and push (`git push`)
   - Other developers must then `git pull` to get the updated version

## Key Point

Merge conflicts are Git’s safety mechanism to prevent accidental overwrites. They require manual intervention and conscious merging.
