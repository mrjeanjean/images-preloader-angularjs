# ANGULARJS IMAGES PRELOADER #

A simple angularjs module for preloading a list of images.

### Requirements ###

* AngularJS 1.4+

### Installation ###

```
#!javascript

angular.module('demoModule', ['creaImagesPreloder']);
```

### Options ###

#### Preload method ####
Don't forget to inject ImagesPreloader into the controller you want to use.

Preload method has the following signature :

```
#!javascript
ImagesPreloader.preload([], callbackImageLoaded, callbackAllImagesLoaded);
```

#### Images ####
First parameter is the list of images you want to preload as an array - **Required**

#### Image loaded callback ####
Second argument is a callback function fired after for each image has been loaded.

#### All images loaded callback ####
Third argument is a callback function fired once after all images have been loaded.


### Example ###

```
#!javascript

angular.module('demoModule').controller('demoController', ['ImagesPreloader', function(ImagesPreloader){
     
     ImagesPreloader.preload([
          'http://lorempixel.com/400/200/nature/1/',
          'http://lorempixel.com/400/200/nature/2/',
          'http://lorempixel.com/400/200/nature/3/',
          'http://lorempixel.com/400/200/nature/4/',
     ], callbackImageLoaded, callbackAllImagesLoaded);

     function callbackImageLoaded(imageURL, numberImagesLoaded, numberImagesTotal){
          console.log(imageURL + ":" + numberImagesLoaded + "/" +numberImagesTotal);
     }

     function callbackAllImagesLoaded(){
          console.log("All images loaded");
     }

}]);
```