#!/usr/bin/env bash

# `set -e`: Abort the script if a command returns with a non-zero exit code.
# `set -u`: Treat unset variables as an error when substituting.
set -eu  

REPO_URL="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

REMOTE_NAME="origin"
MAIN_BRANCH="main"
TARGET_BRANCH="gh-pages"
DOC_FOLDER_MAIN_BRANCH="target/docs"
DOC_FOLDER_TARGET_BRANCH="docs"
# DOC_INDEX_PAGE="${CARGO_PACKAGE_NAME}/index.html"

# cd "$GITHUB_WORKSPACE"
# git config user.name "$BOT_NAME"
# git config user.email "$BOT_EMAIL"

# cd 
git config user.name "Fragcolor bot"
git config user.email "bot@fragcolor.xyz"

# git fetch
# git checkout "$TARGET_BRANCH"

npx typedoc src/interfaces/protos/index.ts src/interfaces/fragments/index.ts src/interfaces/augment-api-consts.ts  src/interfaces/augment-api-errors.ts src/interfaces/augment-api-events.ts src/interfaces/augment-api-query.ts src/interfaces/augment-api-rpc.ts src/interfaces/augment-api-runtime.ts src/interfaces/augment-api-tx.ts src/interfaces/augment-types.ts src/interfaces/augment-types.ts # saves doc in $DOC_FOLDER_MAIN_BRANCH

git add "." # update the docs folder 

git commit -m "Updated GitHub Pages"
if [ $? -ne 0 ]; then
    echo "nothing to commit"
    exit 0
fi

git remote set-url "$REMOTE_NAME" "$REPO_URL" 
git push --force-with-lease "$REMOTE_NAME" "$TARGET_BRANCH"
