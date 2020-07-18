# About the project

This is a simple nodejs project to implement a terminal based todo
tracking application.

## Background

As of July 2020, this application is incomplete as a useful todo
application.  The application was started as an interview project.
The inital interview requiremntes were to create a simple todo
application that could add a todo item, delete a todo item, and list
all todo items.  The interivew test specifically stated that an
external store was not required.  The language and type of application
was open for the purposes of the interview.

## Features

* add a todo item
* delete a todo item
* view all todo items

There are lot of elements that went beyond interview requirements.

* text base menu gui library
* dao library for accessing todo data
* jest testing of dao library
* build managment using make
* make help target to list target descriptions
* make targets to install nodejs to run the applications
* instructions to configure offline markdown viewer in Chrome.
* make targets to open readme in offline viewer


I found a [blog
post](https://license.gooutdoorsgeorgia.com/Licensing/LicenseHome.aspx?id=1001161516)
on building a text base menu system using
[calk](https://www.npmjs.com/package/chalk),
[clear](https://www.npmjs.com/package/clear),
[figlet](https://www.npmjs.com/package/figlet), and
[inquirer](https://www.npmjs.com/package/inquirer).  I flowed the blog
post to build the second version (see [index.js](index.js)) after
building a horible menu workflow manually (see
[index_old.js](index.js)).  I was able to reuse the dao lib and jest
tests between both versions, so the first version was not a total
waste.  I would like to seem more testing at the UI layer.  This may
result in pushing more of the logic to render the UI into functions
and testing these directly.


# Getting Started

## Setup Notes

This application runs using node.js.  The node and npx commands need
to be available in the PATH. Use the "make run" command to start the
application.

I use nvm to manage the version of node.js being used, but there is no
requirement to use nvm.  As long as the node and npx commands are
available in the path, the "make run" target will execute the
application.

## Install Notes

### Install nvm
* run "make install-nvm"
* https://github.com/nvm-sh/nvm

### Install node.js
* run "make install-node"
* https://nodejs.org/

# References:

## Markdown Preview Plus

Having a local way to view Markdown is very helpful.  The [Markdown
Preview
Plus](https://chrome.google.com/webstore/detail/markdown-preview-plus/febilkbfcbhebfnokafefeacimjdckgl)
chrome plugin does a pretty good job and make is a lot easier to
revise markdown code before pushing to GitHub.  I found a thread
referencing the plugin on
[stackoverflow](https://stackoverflow.com/questions/9843609/view-markdown-files-offline).
After installing the plugin, you need to enable "Allow access to file
URLs" in Extensions (menu > More tools > Extensions or enter URL
chrome://extensions/ instead).

## Markdown Cheatsheet

I always seem to land on this [Markdown
Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
when looking for a reference, so I added a reference.
