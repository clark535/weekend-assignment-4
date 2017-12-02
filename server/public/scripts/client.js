var myApp = angular.module('LifeApp', []);//dont have to be the same, but should

myApp.controller('PictureController', ['$http', function($http){
    console.log('picture controller has been loaded');
    var self = this;
    self.message = 'Get your picutres up';

    self.picturesArray = [
        {
        image: "./images/Sydney_Harbour_Bridge.jpg",
        story: `I lived in Sydney right next to the bridge for 
        several months and had the time of my life. I made a ton of great friends and memories, 
        inculding scubba diving on the great barrier reef and bundgy jumping in a rainforest.`,
        show: false,
        like: 0
    }

    ]

self.addStory = function(life) {
    if (life.show == false) {
        life.show = true;
    } else if (life.show == true) {
        life.show = false;
    }
        
     
};

self.likeCounter = function(life) {
    life.like ++;
};









}]);