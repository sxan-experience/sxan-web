# sxan-client

> sxan-client provides the front-end software for the sxan human productivity network

## Objectives

* Web app / Mobile

* Draw scenes

* Develop API

* Build templates

* Connect plugins


## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
# service worker is disabled in dev
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


## Contributer Workflow

### Setup

1. Create a fork https://github.com/sxan-experience/sxan-web#fork-destination-box
2. Clone repo in terminal with `git clone https://github.com/sxan-experience/sxan-web.git`
3. (Once) Add 'upstream' repo to list of remotes with `git remote add upstream https://github.com/`[insert your username here]`/sxan-web.git`
4. (Once) Verify the new remote named 'upstream' with `git remote -v`
5. (Optional) Fetch upstream remote to sync your fork with master `git fetch upstream`
6. Checkout your master branch and merge upstream `git checkout master`

### Submitting Work
If a branch is already created, just checkout the branch for step 1 (the last git command)

1. Create a new branch `git checkout master && git branch `[descriptive name of branch, i.e. feature1]` && git checkout `[descriptive name of branch, i.e. feature1]
2. Hack to your heart's delight
3. Fetch upstream and merge `git fetch upstream && git checkout master
 && git merge upstream/master && git checkout `[[descriptive name of branch, i.e. feature1]` && git rebase master`
4. Click the pull request button to submit work.
