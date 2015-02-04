'use strict';

angular.module('sofa.urlConstructionService', ['sofa.core'])

.factory('urlConstructionService', function (configService) {
    return new sofa.UrlConstructionService(configService);
});
