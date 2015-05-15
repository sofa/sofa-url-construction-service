/**
 * sofa-url-construction-service - v0.5.3 - Fri May 15 2015 14:03:26 GMT+0200 (CEST)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (sofa, document, undefined) {
System.register([], function (_export) {
    'use strict';
    var UrlConstructionService;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            /* global sofa */
            /**
             * @sofadoc class
             * @name sofa.UrlConstructionService
             * @package sofa-url-construction-service
             * @requires sofa.ConfigService
             * @requiresPackage sofa-core
             * @distFile dist/sofa.urlConstructionService.js
             *
             * @description
             * As the name says. This service provides methods to construct URLs for
             * different use cases.
             */

            UrlConstructionService = (function () {
                function UrlConstructionService(configService) {
                    _classCallCheck(this, UrlConstructionService);

                    this.configService = configService;
                }

                _createClass(UrlConstructionService, [{
                    key: 'createUrlForContentPage',

                    /**
                     * @sofadoc method
                     * @name sofa.UrlConstructionService#createUrlForContentPage
                     * @memberof sofa.UrlConstructionService
                     *
                     * @description
                     * Creates url for content page.
                     *
                     * @param {string} pageId
                     * @return {string} Url
                     */
                    value: function createUrlForContentPage(pageId) {
                        return '/pages/' + pageId;
                    }
                }, {
                    key: 'createUrlForProducts',

                    /**
                     * @sofadoc method
                     * @name sofa.UrlConstructionService#createUrlForProducts
                     * @memberof sofa.UrlConstructionService
                     *
                     * @description
                     * Creates url for products.
                     *
                     * @param {int} categoryUrlId Category url id.
                     * @return {string} Url
                     */
                    value: function createUrlForProducts(categoryUrlId) {
                        return '/cat/' + categoryUrlId + '/products';
                    }
                }, {
                    key: 'createUrlForProduct',

                    /**
                     * @sofadoc method
                     * @name sofa.UrlConstructionService#createUrlForProduct
                     * @memberof sofa.UrlConstructionService
                     *
                     * @description
                     * Creates url for a product.
                     *
                     * @param {product} product Product object.
                     * @return {string} Url
                     */
                    value: function createUrlForProduct(product) {
                        return '/cat/' + product.categoryUrlId + '/product/' + product.urlKey;
                    }
                }, {
                    key: 'createUrlForCategory',

                    /**
                     * @sofadoc method
                     * @name sofa.UrlConstructionService#createUrlForCategory
                     * @memberof sofa.UrlConstructionService
                     *
                     * @description
                     * Creates url for a category.
                     *
                     * @param {int} categoryUrlId Category url id.
                     * @return {string} Url
                     */
                    value: function createUrlForCategory(categoryUrlId) {
                        return '/cat/' + categoryUrlId;
                    }
                }, {
                    key: 'createUrlForRootCategory',

                    /**
                     * @sofadoc method
                     * @name sofa.UrlConstructionService#createUrlForRootCategory
                     * @memberof sofa.UrlConstructionService
                     *
                     * @description
                     * Creates url for root category.
                     *
                     * @return {string} Url
                     */
                    value: function createUrlForRootCategory() {
                        return '';
                    }
                }, {
                    key: 'createUrlForCart',

                    /**
                     * @sofadoc method
                     * @name sofa.UrlConstructionService#createUrlForCart
                     * @memberof sofa.UrlConstructionService
                     *
                     * @description
                     * Creates url for cart.
                     *
                     * @return {string} Url
                     */
                    value: function createUrlForCart() {
                        return '/cart';
                    }
                }, {
                    key: 'createUrlForCheckout',

                    /**
                     * @sofadoc method
                     * @name sofa.UrlConstructionService#createUrlForCheckout
                     * @memberof sofa.UrlConstructionService
                     *
                     * @description
                     * Creates url for checkout.
                     *
                     * @return {string} Url
                     */
                    value: function createUrlForCheckout() {
                        return '/checkout';
                    }
                }, {
                    key: 'createUrlForSummary',

                    /**
                     * @sofadoc method
                     * @name sofa.UrlConstructionService#createUrlForSummary
                     * @memberof sofa.UrlConstructionService
                     *
                     * @description
                     * Creates url for summary.
                     *
                     * @param {string} token Summary token.
                     * @return {string} Url
                     */
                    value: function createUrlForSummary(token) {
                        return '/summary/' + token;
                    }
                }, {
                    key: 'createUrlForShippingCostsPage',

                    /**
                     * @sofadoc method
                     * @name sofa.UrlConstructionService#createUrlForShippingCostsPage
                     * @memberof sofa.UrlConstructionService
                     *
                     * @description
                     * Creates url for shipping costs page.
                     *
                     * @return {string} Url
                     */
                    value: function createUrlForShippingCostsPage() {
                        return '/pages/' + this.configService.get('linkShippingCosts', '');
                    }
                }]);

                return UrlConstructionService;
            })();

            _export('default', UrlConstructionService);
        }
    };
});}(sofa, document));
