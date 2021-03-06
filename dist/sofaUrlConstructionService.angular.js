/**
 * sofa-url-construction-service - v0.5.2 - Mon Mar 30 2015 11:32:19 GMT+0200 (CEST)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
'use strict';

angular.module('sofa.urlConstructionService', ['sofa.core'])

.factory('urlConstructionService', ["configService", function (configService) {
    return new sofa.UrlConstructionService(configService);
}]);
}(angular));
