var myApp = angular.module('RestaurantApp', []);//dont have to be the same, but should

myApp.controller('FoodController', ['$http', function($http){
    console.log('food controller has been loaded');
    var self = this;
    self.message = 'Zip Zap partner';
}]);