var myApp = angular.module('LifeApp', []);

myApp.controller('PictureController', ['$http', function($http){
    console.log('picture controller has been loaded');
    var self = this;
    self.message = 'Get your picutres up';//test message.

    self.picturesArray = [
        {
            image: "./images/Sydney_Harbour_Bridge.jpg",
            story: `I lived in Sydney right next to the bridge for 
            several months and had the time of my life. I made a ton of great friends and memories, 
            inculding scubba diving on the great barrier reef and bundgy jumping in a rainforest.`,
            show: false,
            like: 0,
            views: 0.5
        },
        {
            image: "./images/Japan.jpg",
            story: `I lived and taught English in Japan for two years. Living by yourself in a 
            foreign country on the otherside of the world will change anybody. I learned quite a bit about 
            Asian culture and myself. This was a life changing experience.`,
            show: false,
            like: 0,
            views: 0.5
        },
        {
            image: "./images/Castle.jpg",
            story: `I love history, so much so that I earned a bachelors degree in the subject. 
            I constantly imagine myself in historical events and wonder how I would react. It is amazing 
            how often history can repeat itself in the present.`,
            show: false,
            like: 0,
            views: 0.5
        },
        {
            image: "./images/Jupiter_europa.jpg",
            story: `Jupiter is my favorite planet, but this picture is indicative of my life long fascination with the cosmos.
            Not only is space humanities litteral destiny, but it is also symbolic of both the danger and wonder that awaits our species future.
            That is an original quote, you heard it here first.`,
            show: false,
            like: 0,
            views: 0.5
        },
        {
            image: "./images/Jax_and_Autumn_2.jpg",
            story: `My children, Jax and Autumn. My sun rises and sets with them. They are the great motive force in my life
            and the reason I strive to be a better humanbeing. Jax is three and Autumn a bt over one and a half. Quiet is a rare state at our house.`,
            show: false,
            like: 0,
            views: 0.5
        },
        {
            image: "./images/Me_and_Kelsey.jpg",
            story: `My beautiful wife Kelsey, whome I owe just about everything good in my life too. We met only a week after I returned from Japan and 
            have not been apart since. The last seven years have been amazing because I have shared them with her.`,
            show: false,
            like: 0,
            views: 0.5
        }

    ]//end my array of life opbjects

self.addStory = function(life) {
    if (life.show == false) {
        life.show = true;
    } else if (life.show == true) {
        life.show = false;
    }
        life.views +=0.5;
     
};//function to show the story text when the function is clicked, added view counter too.

self.likeCounter = function(life) {
    life.like ++;
};//simple like counter function.









}]);