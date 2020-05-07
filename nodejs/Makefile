SHELL=/bin/bash
.EXPORT_ALL_VARIABLES:
.SHELLFLAGS = -uec -o pipefail

default: help

.PHONY: install-nvm
install-nvm: ## install nvm to manage node.js versions
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

.PHONY: install-node
install-node: ## install node.js using nvm
	nvm install node

.PHONY:
node_modules: package.json ## install nodejs libs
	npm i
	touch $@

.PHONY: build
build: node_modules ## build the app

.PHONY: test ## test the app
test: build
	make -C tests test

.PHONY: run
run: build ## run the node app
	node index.js

.PHONY: clean
clean: ## Removes all files in the .gitignore
	git clean -fdX

.PHONY: open-readme
open-readme: ## Open the README.md file in Google Chrome
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome README.md

.PHONY: depcheck
depcheck: build ## Check for unused dependencies
	node ./node_modules/depcheck/bin/depcheck.js --ignores depcheck
	make -C tests depcheck

.PHONY: help
help:
	@grep -hE '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
