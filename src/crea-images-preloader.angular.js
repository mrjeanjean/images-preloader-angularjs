/*!
 * crea-images-preloader
 * https://bitbucket.org/crealicestudio/images-preloader
 * Version: 1.0.0
 * License: MIT
 */
(function () {
    'use strict';

    var creaImagesPreloaderModule = angular.module('creaImagesPreloader', []);

    creaImagesPreloaderModule.service('ImagesPreloader', ['$q', 'ImagePreloader', function ($q, ImagePreloader) {
        var ImagesPreloader = function () {

            var me = this,
                callbackImageLoaded,
                callbackAllImagesLoaded,
                promises = [],
                promise,
                imagesLoaded = 0;

            this.preload = function (images, callbackImageLoaded, callbackAllImagesLoaded) {

                var deferred = $q.defer();

                angular.forEach(images, function (image) {
                    me.addImage(image, callbackImageLoaded);
                });

                $q.all(promises).then(function () {
                    if (callbackAllImagesLoaded !== 'undefined') {
                        callbackAllImagesLoaded();
                    }
                    deferred.resolve();
                });

                return deferred.promise;
            };

            this.addImage = function (image, callbackImageLoaded) {
                promise = new ImagePreloader(image);

                promise.then(function (imageName) {
                    imagesLoaded += 1;
                    if (callbackImageLoaded !== 'undefined') {
                        callbackImageLoaded(imageName, imagesLoaded, promises.length);
                    }
                });

                promises.push(promise);
            };
        };

        return new ImagesPreloader();
    }]);

    creaImagesPreloaderModule.service('ImagePreloader', ['$q', function ($q) {
        var ImagePreloader = function (image) {
            var deferred = $q.defer(),
                imagePreload = new Image();

            imagePreload.src = image;

            angular.element(imagePreload).bind('load', function () {
                deferred.resolve(image);
            });

            return deferred.promise;
        };
        return ImagePreloader;
    }]);

})();