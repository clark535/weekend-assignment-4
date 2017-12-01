var myApp = angular.module('LifeApp', []);//dont have to be the same, but should

myApp.controller('PictureController', ['$http', function($http){
    console.log('picture controller has been loaded');
    var self = this;
    self.message = 'Get your picutres up';
}]);