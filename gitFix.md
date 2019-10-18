### ISSUE: local master branch was committed to; diverged from remote master

If the changes made on the local master branch were in error and you wish
to discard them, you can correct the situation with the following commands

```
git reset --soft HEAD~1
```

-this will revert the most recent commit; changes will still be staged

```
git reset HEAD <file>
or
git restore --staged <file>
```

-this will unstage the changes you wish to discard

```
git checkout -- <file>
or
git restore <file>
```

-this will discard all the changes made to the local files
