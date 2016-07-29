(function() {
    'use strict';

    angular.module('myApp')
      .filter('Filesize', function () {
        return function (size) {
          if (isNaN(size)) {
            size = 0;
          }

          if (size < 1024) {
            return size + ' Bytes';        
          var size = size/1024;
          }
          if (size < 1024) {
            return size.toFixed(2) + ' Kb';
          var size = size/1024;
          }
          if (size < 1024) {
            return size.toFixed(2) + ' Mb';
          var size = size/1024;
          }
          if (size < 1024) {
            return size.toFixed(2) + ' Gb';
          var size = size/1024;
          }

    };
  });
});