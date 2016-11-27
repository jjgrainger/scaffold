# Creating Scaffolds

### Getting started

First, its highly recommended that you read the [official documentation](http://gruntjs.com/project-scaffolding) before you embark on creating your scaffold.

A useful tip is to start off by creating your new scaffold in the `~/.grunt-init` directory.

This is particularly handy as grunt will already see it as a scaffold that can be run. This makes it easier to test as you can run `$ grunt-init [scaffold-name]` in an empty folder to see how it works.

### File Structure

This scaffold will give you the following file structure:

* `template.js` - The main template file.
* `/root` - All files to be copied are located here.
* `README.md` - Basic instructions on installing and using your scaffold.

### Prompts

You can prompt users to input specific input that can then be used later to when processing your scaffold. These prompts can provide information to replace [placeholders](#markdown-header-using-prompts-in-tempaltes) within template files.

##### Built in prompts

Grunt provides you with a number of [default prompts](http://gruntjs.com/project-scaffolding#built-in-prompts) that generate smart defaults. Some examples are:

* `name` - defaults to the current working directory name.
* `title` - defaults to the project name, but made more human readable.
* `author_name` - defaults to the git config user name
* `author_email` - defaults to the git config user email


##### Using prompts in templates

Use `{%= property %}` to use prompt properties within files. As an example, to use the `title` of the project in an `index.html` file:

```html
<html>
    <head>
        <title>{%= title %}</title>
    </head>
    <body>
        <p>An awesome project!</p>
    </body>
</html>
```

### Package.json

You can scaffold `package.json`, or any `.json` file using `init.writePackageJSON(filename, props);`. This is particularly useful when the contents of the package file is dependent on the user prompts.




