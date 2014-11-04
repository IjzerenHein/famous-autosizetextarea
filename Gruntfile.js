/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      target: ['src/*.js'],
      options: {
        config: '.eslintrc'
      }
    },
    jscs: {
        src: ['src/*.js'],
        options: {
            config: '.jscsrc'
        }
    },
    jsdoc2md: {
      separateOutputFilePerInput: {
        options: {
          index: true
        },
        files: [
            // core
            { src: 'src/LayoutContext.js', dest: 'docs/LayoutContext.md' },
            { src: 'src/LayoutController.js', dest: 'docs/LayoutController.md' },
            { src: 'src/FlowLayoutController.js', dest: 'docs/FlowLayoutController.md' },
            { src: 'src/ScrollView.js', dest: 'docs/ScrollView.md' },
            { src: 'src/LayoutUtility.js', dest: 'docs/LayoutUtility.md' },
            // helpers
            { src: 'src/helpers/LayoutDockHelper.js', dest: 'docs/helpers/LayoutDockHelper.md' },
            // layouts
            { src: 'src/layouts/CollectionLayout.js', dest: 'docs/layouts/CollectionLayout.md' },
            { src: 'src/layouts/GridLayout.js', dest: 'docs/layouts/GridLayout.md' },
            { src: 'src/layouts/ListLayout.js', dest: 'docs/layouts/ListLayout.md' },
            { src: 'src/layouts/HeaderFooterLayout.js', dest: 'docs/layouts/HeaderFooterLayout.md' },
            { src: 'src/layouts/NavBarLayout.js', dest: 'docs/layouts/NavBarLayout.md' }
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

  // Default task.
  grunt.registerTask('default', ['eslint', 'jscs', 'jsdoc2md']);
};
