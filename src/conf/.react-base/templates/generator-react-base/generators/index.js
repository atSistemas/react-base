'use strict';

var yeoman = require('yeoman-generator');
var fs = require("fs");
var listModules, listModulesArray;

var typesDocument = {
  component:{
    folder: '/components/',
    template: '_component.js',  
    nameFile: '/index.js',
    nameType: 'component'
  },
  container:{
    folder: '/containers/',
    template: '_container.js',
    nameFile: '/index.js',
    nameType: 'container'
  }
}

var baseRoute = 'src'
var sectionCopy;

function section (name, config) {
  this.fs.copyTpl(
    this.templatePath(config.template),
    this.destinationPath(baseRoute + config.folder + name + config.nameFile), {
      name: name
    }
  );
}

function createContainer(name){
  sectionCopy(name, typesDocument.container);
}

function createComponent(name){
  sectionCopy(name, typesDocument.component);
}

module.exports = yeoman.Base.extend({

  prompting: function () {
   

    var done = this.async();

    var promptsAll = [{
      message: 'reactr-base-generator, choose your option: \n 1- New Container \n 2- New Component\n  write you option: ',
      name: 'option',
      type: 'input'
    },
    {
      message: ' Name',
      name: 'name',
      type: 'input'
    }];
    
    this.prompt(promptsAll, function (answers) {

      this.props = answers;
      this.props.option = parseInt(answers.option);
      this.props.name = answers.name;
      done();
    }.bind(this));
  },

  writing: {
    config: function () {
      sectionCopy = section.bind(this);

      switch(this.props.option){
          case 1: 
            createContainer(this.props.name);
            break;
          case 2:
            createComponent(this.props.name);
          break;
          default:
          return;
        }
     
     
    }
  }
});