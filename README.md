# Scaffold v1.0

> A scaffold for creating scaffolds?!

## Requirements

* You have [node](http://nodejs.org) installed
* You have [grunt-cli](http://gruntjs.com/getting-started) installed
* You have [grunt-init](http://gruntjs.com/project-scaffolding) installed

## Installation

To install the scaffold into the `.grunt-init` folder in your home directory, run the following in your terminal.

```
$ git clone git@github.com/jjgrainger/scaffold.git ~/.grunt-init/scaffold
```

_(Windows users, see [the documentation](http://gruntjs.com/project-scaffolding#installing-templates) for the correct destination directory path)_

## Usage

Create a project folder, then inside that folder, initialize the scaffold with `grunt-init scaffold`

```
$ grunt-init scaffold
```

Follow the prompts entering the relevant information. After, you'll be given the following:

* A `README.md` where placeholders are replaced with the information from the prompts.
* A `template.js` file, with some basics to get your started.
* An empty `/root` folder that stores all files to be copied.

## Notes

* Licensed under the [MIT License](LICENSE)
* Maintained under the [Semantic Versioning Guide](http://semver.org)
* See [Creating-Scaffolds.md](Creating-Scaffolds.md) for tips
* See the [offical documentation](http://gruntjs.com/project-scaffolding) on gruntjs.com
