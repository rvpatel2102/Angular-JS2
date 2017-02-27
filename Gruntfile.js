/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine: {
                files: {
                    'public_html/mincss.css': ["public_html/pems.css", "public_html/css2.css"]
                }
            }
        }
    });       
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask("default", ['cssmin']);
};
