'use strict';
/* global sofa */
/**
 * @name UrlConstructionService
 * @namespace sofa.UrlConstructionService
 *
 * @description
 * As the name says. This service provides methods to construct URLs for
 * different use cases.
 */
sofa.define('sofa.UrlConstructionService', function (configService) {
    var self = {};

    /**
     * @method createUrlForContentPage
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
     * @method createUrlForProducts
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
     * @method createUrlForProduct
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
     * @method createUrlForCategory
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
     * @method createUrlForRootCategory
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
     * @method createUrlForCart
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
     * @method createUrlForCheckout
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
     * @method createUrlForSummary
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
     * @method createUrlForShippingCostsPage
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
