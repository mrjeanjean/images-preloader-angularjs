angular.module('demo-module', ['creaImagesPreloader']);

angular.module('demo-module').controller('demoController', ['ImagesPreloader', function(ImagesPreloader){

     ImagesPreloader.preload([
          'http://lorempixel.com/400/200/nature/1/',
          'http://lorempixel.com/400/200/nature/2/',
          'http://lorempixel.com/400/200/nature/3/',
          'http://lorempixel.com/400/200/nature/4/',
     ], callbackImageLoaded, callbackAllImagesLoaded);

     function callbackImageLoaded(imageURL, numberImagesLoaded, numberImagesTotal){
          console.log(imageURL + " : " + numberImagesLoaded + "/" +numberImagesTotal + " loaded");
     }

     function callbackAllImagesLoaded(){
          console.log("All images loaded");
     }

}]);