/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      target: ['AutosizeTextareaSurface.js'],
      options: {
        config: '.eslintrc'
      }
    },
    jscs: {
        src: ['AutosizeTextareaSurface.js'],
        options: {
            config: '.jscsrc'
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jscs');

  // Default task.
  grunt.registerTask('default', ['eslint', 'jscs']);
};
