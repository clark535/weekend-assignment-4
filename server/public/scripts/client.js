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
        },
        {
            image: "./images/Japan.jpg",
            story: `I lived and taught English in Japan for two years. Living by yourself in a 
            foreign country on the otherside of the world will change anybody. I learned quite a bit about 
            Asian culture and myself. This was a life changing experience.`,
            show: false,
            like: 0
        },
        {
            image: "./images/Castle.jpg",
            story: `I love history, so much so that I earned a bachelors degree in the subject. 
            I constantly imagine myself in historical events and wonder how I would react. It is amazing 
            how often history can repeat itself in the present.`,
            show: false,
            like: 0
        },
        {
            image: "./image/Jupiter_europa.jpg",
            story: `Jupiter is my favorite planet, but this picture is indicative of my life long fascination with the cosmos.
            Not only is space humanities litteral destiny, but it is also symbolic of both the danger and wonder that awaits our species future.
            That is an original quote, you heard it here first.`,
            show: false,
            like: 0
        },
        {
            image: 
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