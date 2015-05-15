'use strict';

import UrlConstructionService from 'UrlConstructionService';

angular.module('sofa.urlConstructionService', ['sofa.core'])
    .factory('urlConstructionService', function (configService) {
        let _UrlConstructionService = (typeof UrlConstructionService === 'undefined') ? sofa.UrlConstructionService : UrlConstructionService;
        return new _UrlConstructionService(configService);
    });
