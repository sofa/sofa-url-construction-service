/**
 * sofa-url-construction-service - v0.5.3 - Fri May 15 2015 14:03:27 GMT+0200 (CEST)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _UrlConstructionService2 = require('UrlConstructionService');

var _UrlConstructionService3 = _interopRequireDefault(_UrlConstructionService2);

angular.module('sofa.urlConstructionService', ['sofa.core']).factory('urlConstructionService', ["configService", function (configService) {
    var _UrlConstructionService = typeof _UrlConstructionService3['default'] === 'undefined' ? sofa.UrlConstructionService : _UrlConstructionService3['default'];
    return new _UrlConstructionService(configService);
}]);}(angular));
