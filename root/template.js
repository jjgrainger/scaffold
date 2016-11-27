'use strict';

// description displayed when running grunt-init
exports.description = '{%= description %}';

// note displayed on complete
exports.after = '';

// warn if any files already exist in the directory
exports.warnOn = '*';

// the functon that runs template
exports.template = function(grunt, init, done) {

    // start the process
    init.process({}, [
        init.prompt('name'),
        init.prompt('description'),
        init.prompt('version', '1.0.0')
    ], function(err, props) {

        // define files/folders to copy (in root)
        var files = init.filesToCopy();

        // copy and process files
        init.copyAndProcess(files);

        // create empty directories
        // grunt.file.mkdir('folder');

        // generate a package.json
        // var package = {
        //      name: props.name,
        //      description: props.description,
        //      version: props.version,
        //      dependencies: {},
        //      devDependencies: {}
        // };
        // init.writePackageJSON('package.json', package);

        // scaffold complete
        done();
    });
};
