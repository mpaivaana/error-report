#!/bin/bash
set -e
 
eval $(ssh-agent -s)
mkdir -p ~/.ssh && chmod 700 ~/.ssh
 
ssh-keyscan $GN_GITLAB_TESTING_URL >> ~/.ssh/known_hosts
chmod 644 ~/.ssh/known_hosts

ssh-add <(echo "$SSH_PRIVATE_KEY")
[[ -f /.dockerenv ]] && echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config

git remote set-url --push origin $REPO
git config --global user.name "${GITLAB_USER_NAME}"
git config --global user.email "${GITLAB_USER_EMAIL}"

CHANGELOG=$(git log -1 --format="%s%n%b")
LAST_VERSION=$(node -p "require('./package.json').version")

if [[ $CHANGELOG == *"[BREAKING]"* ]]; then
  npm version --no-git-tag-version major
elif [[ $CHANGELOG == *"[FEATURE]"* ]]; then
  npm version --no-git-tag-version minor
elif [[ $CHANGELOG == *"[PATCH]"* ]]; then
  npm version --no-git-tag-version patch
fi  
 
NEW_VERSION=$(node -p "require('./package.json').version")

if [ $NEW_VERSION != $LAST_VERSION ]
then
  git add package.json yarn.lock .gitlab-ci.yml
  git commit -m "Release $NEW_VERSION"
  git tag -a $NEW_VERSION -m "Release $NEW_VERSION"
  git push -f --tags origin HEAD:master
else
  echo "Warning: No changes (breaking, feature, patch) found in changelog."
  exit 1
fi
