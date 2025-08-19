---
title: Grep
feed: show
date: 2025-08-19
---
- **to make act like and**:
`history | grep sudo | grep nvim`

- **to make act like or**:
`history | grep -E 'sudo|nvim'`

- **to search for a keyword within all files in a folder**:
`grep -r 'for' .`

- **Limit search to specific file types**: If you want to search only within specific file types (e.g., `.txt` or `.cpp`), use `--include`:
`grep -r "keyword" /path/to/folder --include="*.txt"`

- **Exclude certain directories or files**: Use `--exclude` or `--exclude-dir`:
`grep -r "keyword" /path/to/folder --exclude="*.log" --exclude-dir="backup"`

---
### more options
```sh
-r  to search recursively
-i  to ignore case sensitive
-n  to show to line number
-c  to count the word
```
