SHELL=/bin/bash
.EXPORT_ALL_VARIABLES:
.SHELLFLAGS = -uec -o pipefail

# Test debugging
# https://nodejs.org/en/docs/guides/debugging-getting-started/
# replace NPX var with below
# add 'debugger;' in code to force stop or just step through
#NPX = npx --no-install -n --inspect-brk
NPX = npx --no-install
JEST = ${NPX} jest --passWithNoTests --verbose

#JEST_HTML_REPORTER_PAGE_TITLE="TODO - Test Report"
#JEST_HTML_REPORTER_OUTPUT_PATH="test-report.html"

default: help

node_modules: package.json
	npm i
	touch $@

.PHONY: execute
execute: node_modules ## Run tests without any setup or teardown
#	$(JEST) -t 'parallel: ${TEST}' --config jest.parallel.config.json ${TEST_SUITE}
	$(JEST) -t 'parallel: ${TEST}' ${TEST_SUITE}
#	JEST_HTML_REPORTER_PAGE_TITLE=${JEST_HTML_REPORTER_PAGE_TITLE} \
#	JEST_HTML_REPORTER_OUTPUT_PATH=${JEST_HTML_REPORTER_OUTPUT_PATH} \



.PHONY: test
test: execute ## Run tests with any setup or teardown

.PHONY: help
help:
	@grep -hE '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
