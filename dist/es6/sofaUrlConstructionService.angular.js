/**
 * sofa-url-construction-service - v0.5.3 - Fri May 15 2015 14:03:27 GMT+0200 (CEST)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
'use strict';

import UrlConstructionService from 'UrlConstructionService';

angular.module('sofa.urlConstructionService', ['sofa.core'])
    .factory('urlConstructionService', function (configService) {
        let _UrlConstructionService = (typeof UrlConstructionService === 'undefined') ? sofa.UrlConstructionService : UrlConstructionService;
        return new _UrlConstructionService(configService);
    });
