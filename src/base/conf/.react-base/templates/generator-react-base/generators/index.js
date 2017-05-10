'use strict';

var yeoman = require('yeoman-generator');
var optionOrPrompt = require('yeoman-option-or-prompt');
var fs = require("fs");
var listModules, listModulesArray;

var typesDocument = {

  action:{
    folder: '/actions/',
    template: '_action.js',
    nameFile: '/index.js',
    nameType: 'action'
  },
  action_spec:{
    folder: '/actions/spec/',
    template: '_action.spec.js',
    nameFile: '.action.spec.js',
    nameType: 'actionSpec'
  },
  api:{
    folder: '/api/',
    template: '_api.js',
    nameFile: '/index.js',
    nameType: 'api'
  },
  component:{
    folder: '/components/',
    template: '_component.js',
    nameFile: '/index.jsx',
    nameType: 'component'
  },
  component_spec:{
    folder: '/components/spec/',
    template: '_component.spec.js',
    nameFile: '.component.spec.js',
    nameType: 'component_spec'
  },
  container:{
    folder: '/',
    template: '_container.js',
    nameFile: '/index.jsx',
    nameType: 'container'
  },
  container_spec:{
    folder: '/spec/',
    template: '_container.spec.js',
    nameFile: '.container.spec.js',
    nameType: 'container_spec'
  },
  models:{
    folder: '/models/',
    template: '_models.js',
    nameFile: '/index.js',
    nameType: 'models'
  },
  reducer:{
    folder: '/reducers/',
    template: '_reducer.js',
    nameFile: '/index.js',
    nameType: 'reducer'
  },
  reducer_spec:{
    folder: '/reducers/spec/',
    template: '_reducer.spec.js',
    nameFile: '.reducer.spec.js',
    nameType: 'reducer_spec'
  },
  styles:{
    folder: '/',
    template: '_styles.css',
    nameFile: '/styles.css',
    nameType: 'styles'
  },
  types:{
    folder: '/actionTypes/',
    template: '_actionTypes.js',
    nameFile: '/index.js',
    nameType: 'actionTypes'
  }
}

var baseRoute = 'src/app';
var sectionCopy;

function section (route, name, config) {
  this.fs.copyTpl(
    this.templatePath(config.template),
    this.destinationPath(route + name + config.folder + config.nameFile), {
      name: name,
      nameUpper: name.toUpperCase(),
      nameLower: name.toLowerCase(),
      namePascal: name.charAt(0).toUpperCase() + name.slice(1),
      nameGenerator: '_' + name.charAt(0).toUpperCase() + name.slice(1),
      nameState: '_' + name
    }
  );
}

function sectionSpec(route, name, config){
    this.fs.copyTpl(
    this.templatePath(config.template),
    this.destinationPath(route + name + config.folder + name + config.nameFile), {
      name: name,
      nameUpper: name.toUpperCase(),
      nameLower: name.toLowerCase(),
      namePascal: name.charAt(0).toUpperCase() + name.slice(1),
      nameGenerator: '_' + name.charAt(0).toUpperCase() + name.slice(1),
      nameState: '_' + name
    }
  );
}


function createComponent(name){
  let routeComponentName = baseRoute +'/components/' + name + '/' ;
  let namePascal = name.charAt(0).toUpperCase() + name.slice(1);

  /*COMPONENT*/
  this.fs.copyTpl(
    this.templatePath(typesDocument.component.template),
    this.destinationPath(routeComponentName + typesDocument.component.nameFile , '/'), {
      name: namePascal,
      nameUpper: name.toUpperCase(),
      nameLower: name.toLowerCase()
    }
  );

  /*STYLES*/
  this.fs.copyTpl(
    this.templatePath(typesDocument.styles.template),
    this.destinationPath(routeComponentName  + typesDocument.styles.nameFile, '/'), {
      name: namePascal,
      nameUpper: name.toUpperCase(),
      nameLower: name.toLowerCase()
    }
  );

  /*SPEC*/
  this.fs.copyTpl(
    this.templatePath(typesDocument.component_spec.template),
    this.destinationPath(routeComponentName + '/spec/' + name + typesDocument.component_spec.nameFile), {
      name: namePascal,
      nameUpper: name.toUpperCase(),
      nameLower: name.toLowerCase()
    }
  );

}

function createContainer(name){
  let route = baseRoute + '/containers/'
  let namePascal = name.charAt(0).toUpperCase() + name.slice(1)
  sectionCopy(route, namePascal, typesDocument.action);
  sectionSpec(route, namePascal, typesDocument.action_spec);
  sectionCopy(route, namePascal, typesDocument.api);
  sectionCopy(route, namePascal, typesDocument.component);
  sectionSpec(route, namePascal, typesDocument.component_spec);
  sectionCopy(route, namePascal, typesDocument.container);
  sectionSpec(route, namePascal, typesDocument.container_spec);
  sectionCopy(route, namePascal, typesDocument.models);
  sectionCopy(route, namePascal, typesDocument.reducer);
  sectionSpec(route, namePascal, typesDocument.reducer_spec);
  sectionCopy(route, namePascal, typesDocument.styles);
  sectionCopy(route, namePascal, typesDocument.types);

}

module.exports = yeoman.Base.extend({
  _optionOrPrompt: optionOrPrompt,

  prompting: function () {

    var done = this.async();

    var promptsAll = [{
      message: 'React-Base generator, choose your option: \n 1- New Container \n 2- New Component\n  write you option: ',
      name: 'option',
      type: 'input'
    },
    {
      message: 'Input Name',
      name: 'name',
      type: 'input'
    }];

    this._optionOrPrompt(promptsAll, function (answers) {

      this.props = answers;
      this.props.option = parseInt(answers.option);
      this.props.name = answers.name;
      done();
    }.bind(this));
  },

  writing: {
    config: function () {
      sectionCopy = section.bind(this);

      sectionSpec = sectionSpec.bind(this);

      createComponent = createComponent.bind(this);
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
  },
  end: function () {
        var done = this.async();
        this.spawnCommand('npm', ['run', 'postYeomanGenerator']).on('close', done);
    }
});
