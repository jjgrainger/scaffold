# {%= title || name %} v{%= version %}

> {%= description %}

## Requirements

* You have [node](http://nodejs.org) installed
* You have [grunt-cli](http://gruntjs.com/getting-started) installed
* You have [grunt-init](http://gruntjs.com/project-scaffolding) installed

## Installation

To innstall the scaffold into the `.grunt-init` folder in your home directory, run the following in your terminal.

```
$ git clone {%= repository %} ~/.grunt-init/{%= name %}
```

_(Windows users, see [the documentation](http://gruntjs.com/project-scaffolding#installing-templates) for the correct destination directory path)_

## Usage

Create a project folder, then initialize the scaffold with `grunt-init {%= name %}`

```
$ grunt-init {%= name %}
```

## Notes

* Licensed under the [{%= licenses %}](LICENSE-{%= licenses %})
* Maintained under the [Semantic Versioning Guide](http://semver.org)

## Authors

* {%= author_name %} {%= author_url %}
