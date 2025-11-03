[Back to Table of Contents](../README.md)

# Git – Cloning Repositories

With `git clone` you copy a remote repository (e.g. from GitHub) to your local machine.

## Command

```bash
git clone <GitHub-URL>
```

- `<GitHub-URL>` is the address of the repository (HTTPS or SSH).
- You can find the URL on the GitHub page of the repository via the "Code" button.
- Alternatively, you can download the repository as a ZIP file, but then you lose the Git history and version control.

## Option: Clone directly into the current folder

```bash
git clone <GitHub-URL> .
```

- The dot (`.`) at the end means: copy directly into the current folder.
- Advantage: No new subfolder is created, everything is copied directly into your current directory.
- Useful if you have already prepared a project folder.

## Summary

| Variant             | Result                                                                   |
| ------------------- | ------------------------------------------------------------------------ |
| `git clone <URL>`   | Creates a new folder with the repository name and copies everything in   |
| `git clone <URL> .` | Copies all files directly into the current folder, no new folder created |
