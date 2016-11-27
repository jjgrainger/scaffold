'use strict';

// description displayed when running grunt-init
exports.description = 'Create a scaffold template.';

// note displayed before the prompts
// exports.notes = '';

// note displayed on complete
exports.after = 'All done, see http://gruntjs.com/project-scaffolding to help get you started.';

// warn if any files already exist in the directory
exports.warnOn = '*';

// run template
exports.template = function(grunt, init, done) {

    // prompt for information first
    init.process({}, [
        init.prompt('name'),
        init.prompt('title'),
        init.prompt('description'),
        init.prompt('version', '1.0.0'),
        init.prompt('repository'),
        init.prompt("homepage"),
        init.prompt("author_name"),
        init.prompt("author_url"),
        init.prompt('licenses', 'MIT')
    ], function(err, props) {
        // define files/folders to copy (in root)
        var files = init.filesToCopy();

        // Add properly-named license files.
        init.addLicenseFiles(files, props.licenses);

        // copy and process files with the prompt properties
        init.copyAndProcess(files, props);

        // create root directory for template files
        grunt.file.mkdir('root');

        done();
    });
};
