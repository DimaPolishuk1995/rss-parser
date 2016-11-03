module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var modRewrite = require('connect-modrewrite');

    grunt.config.init({
        watch: {
            dev: {
                files: ['app/**/*', '!app/bower_components/**/*'],
                tasks: ['dev']
            }
        },
        connect: {
            options: {
                livereload: 35729,
                hostname: 'localhost',
                port: 8083
            },
            livereload: {
                options: {
                    middleware: function(connect, options) {
                      return [
                          modRewrite(['^[^\\.]*$ /index.html [L]']),
                          connect.static('app'),
                      ];
                    }
                }
            }
        }
    });


    grunt.registerTask('dev', 'Compile then start a connect web server', function (target) {
        if (target === 'serve') {
            grunt.task.run(['connect:livereload']);
        }

        grunt.task.run([
            'watch'
        ]);
    });
};
