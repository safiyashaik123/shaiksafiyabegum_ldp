#! /usr/bin/env bash
if [[ $(( $(find * | wc -l) + 10 )) -gt 32 ]] ;then
  echo "test failed"
  exit 1
else
  echo "test passed"
  exit 0
fi
