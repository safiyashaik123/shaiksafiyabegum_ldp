# Investigation Kata

## Purpose
To understand Git's internal object structure using commits, trees, and blobs.

## Commands Used
git log --oneline
git cat-file -p <commit_sha>
git cat-file -p <tree_sha>
git cat-file -p <blob_sha>

## What I Did
1. Found the latest commit.
2. Inspected commit, tree, and blob objects.
3. Traversed the complete object graph.
4. Identified how commits point to trees and trees point to blobs.
5. Drew the complete Git object graph.

## Learning
- Commit objects point to tree objects.
- Tree objects represent folders.
- Blob objects store file contents.
- Git internally stores data as a graph of commits, trees, and blobs.

