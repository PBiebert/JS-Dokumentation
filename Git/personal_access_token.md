[Back to Table of Contents](../README.md)

# Git – Personal Access Token (PAT)

A Personal Access Token (PAT) is used to authenticate with GitHub – for example, when pushing or pulling from private repositories – instead of a password.

## Creating a PAT

1. Click on your profile → **Settings**
2. Go to **Developer Settings**
3. Select **Personal Access Tokens**

### Option 1: Fine-Grained Tokens

- Step-by-step:
  1. Set a token name
  2. Description (optional)
  3. Set expiration date
  4. Set repository access (e.g. only specific repos)
  5. Set restrictions for actions (e.g. read, write)
  6. Click **Generate Token**
  7. Save the token – Attention: You cannot see it again after leaving the page!

### Option 2: Classic Tokens

- Older, less granular tokens
- Grant access to all repositories depending on permissions
- Less flexible and less fine-grained

## Key Point

**Fine-grained tokens** are the secure choice for modern GitHub workflows, as they offer precise permissions and an expiration date. **Classic tokens** should only be used if fine-grained tokens are not compatible.
