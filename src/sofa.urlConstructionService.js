'use strict';
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
sofa.define('sofa.UrlConstructionService', function (configService) {
    var self = {};

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
    self.createUrlForContentPage = function (pageId) {
        return '/pages/' + pageId;
    };

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
    self.createUrlForProducts = function (categoryUrlId) {
        return '/cat/' + categoryUrlId + '/products';
    };

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
    self.createUrlForProduct = function (product) {
        return '/cat/' + product.categoryUrlId + '/product/' + product.urlKey;
    };

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
    self.createUrlForCategory = function (categoryUrlId) {
        return '/cat/' + categoryUrlId;
    };

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
    self.createUrlForRootCategory = function () {
        return '';
    };

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
    self.createUrlForCart = function () {
        return '/cart';
    };

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
    self.createUrlForCheckout = function () {
        return '/checkout';
    };

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
    self.createUrlForSummary = function (token) {
        return '/summary/' + token;
    };

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
    self.createUrlForShippingCostsPage = function () {
        return '/pages/' + configService.get('linkShippingCosts', '');
    };

    return self;
});
