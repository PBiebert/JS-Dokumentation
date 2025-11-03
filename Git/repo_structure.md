[Back to Table of Contents](../README.md)

# Git – Repository Structure: README, .gitignore and LICENSE

## .gitignore

- **Purpose:** Exclude files or folders from Git tracking, e.g. sensitive data like `.env`.
- **Location:** In the root folder of your project.
- **How it works:**
  - List the files or folders to ignore in the `.gitignore` file.

**Example `.gitignore`:**

```
.env
node_modules/
.DS_Store
```

- **Result:** These files will no longer be committed, even if you run `git add .`.

## README.md

- **Purpose:** Documentation for the project, explains how to use the code.
- **Possible contents:**
  - Notes and links
  - Documentation
  - Changelog
  - Installation instructions
  - Examples
- **Rules / Tips:**
  1. Structure similar to HTML (headings, lists, paragraphs)
  2. Write clearly, concisely, and in a readable way

## LICENSE

- **Purpose:** Defines rights and obligations regarding the use of your code.
- **Examples:** MIT License, GPL, Apache License
- **MIT License:**
  - Very common and simple
  - Usually includes disclaimer and usage rights
  - Important so others know what they are allowed to do with your code
