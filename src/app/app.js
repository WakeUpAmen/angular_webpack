import angular from 'angular';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($http, $scope){
    console.log('111');
    this.url = 'https://github.com/preboot/angular-webpack';
    this.contents = {};
  // read the json file
    $http.get("../data/rest.json").then(function(data) {
    // console.log('2222');
    // console.log(data.data);
    // console.log(typeof(data));
    $scope.contents = data.data;
    // console.log('333');
    
    //debugger;
   });
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;