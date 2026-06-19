# Git Objects Kata

## Purpose

The purpose of this kata is to understand how Git stores data internally using Commit, Tree, and Blob objects.

---

## Commands Used

### View Commit History

```bash
git log --oneline
```

### Inspect Commit Object

```bash
git cat-file -p 7d2c18f
```

### Inspect Tree Object

```bash
git cat-file -p bac832e6166c3667c953bdc552ee683248ab62d
```

### Inspect Parent Commit

```bash
git cat-file -p 88f4bcfe00d3d1f63c80938510107d2000c6af3a
```

### View Repository Structure

```bash
git ls-tree HEAD
```

### Compare Older Commit with Current Commit

```bash
git ls-tree 996a3bda33ddff3d8e3923035b0819eaa694f916
git ls-tree HEAD
```

---

## What I Did

1. Used `git log --oneline` to identify a commit SHA.
2. Used `git cat-file -p` to inspect the commit object.
3. Identified the Tree SHA and Parent SHA from the commit.
4. Inspected the tree object to understand the repository structure.
5. Inspected the parent commit to understand commit relationships.
6. Checked the `.git/objects` directory to understand where Git stores objects.
7. Compared the output of `git cat-file` and `git ls-tree`.
8. Verified that Git commands work inside the `.git` directory.
9. Compared an older commit with the current HEAD commit.

---

## Learning

* Git stores data as Commit, Tree, and Blob objects.
* Commit objects contain commit information and references to tree and parent commits.
* Tree objects represent directories and folder structures.
* Blob objects store file contents.
* Git stores objects inside the `.git/objects` directory.
* Each commit represents a snapshot of the repository at a specific point in time.
* `git cat-file` is used to inspect Git objects.
* `git ls-tree` is used to view the contents of a tree object.

---

## Object Flow

```text
Commit
  │
  ├── Parent Commit
  │
  ▼
Tree
  │
  ├── Blob (Files)
  └── Tree (Directories)
```
