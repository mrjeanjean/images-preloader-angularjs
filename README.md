# ANGULARJS IMAGES PRELOADER #

A simple service for preloading a list of images. Callback for each image loaded and callback for all images loaded.

### Requirements ###

* AngularJS 1.4+

### Installation ###

```
#!javascript

angular.module('demoModule', ['creaImagesPreloder'])
```

### Example ###

```
#!javascript

angular.module('demoModule').controller('imagesPreloader', function(imagesPreloader){
     
     ImagesPreloader.preload([
          'http://lorempixel.com/400/200/nature/1/',
          'http://lorempixel.com/400/200/nature/2/',
          'http://lorempixel.com/400/200/nature/3/',
          'http://lorempixel.com/400/200/nature/4/',
     ], callbackImageLoaded, callbackAllImagesLoaded);

     function callbackImageLoaded(imageURL, numberImagesLoaded, numberImagesTotal){
          console.log( imageURL + ":" + numberImagesLoaded + "/" +numberImagesTotal);
     }

     function callbackAllImagesLoaded(){
          console.log("All images loaded");
     }

}
```