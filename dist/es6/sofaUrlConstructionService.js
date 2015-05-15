/**
 * sofa-url-construction-service - v0.5.3 - Fri May 15 2015 14:03:26 GMT+0200 (CEST)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
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
class UrlConstructionService {
    constructor(configService) {
        this.configService = configService;
    }


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
    createUrlForContentPage(pageId) {
        return '/pages/' + pageId;
    }


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
    createUrlForProducts(categoryUrlId) {
        return '/cat/' + categoryUrlId + '/products';
    }

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
    createUrlForProduct(product) {
        return '/cat/' + product.categoryUrlId + '/product/' + product.urlKey;
    }

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
    createUrlForCategory(categoryUrlId) {
        return '/cat/' + categoryUrlId;
    }

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
    createUrlForRootCategory() {
        return '';
    }

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
    createUrlForCart() {
        return '/cart';
    }

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
    createUrlForCheckout() {
        return '/checkout';
    }

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
    createUrlForSummary(token) {
        return '/summary/' + token;
    }

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
    createUrlForShippingCostsPage() {
        return '/pages/' + this.configService.get('linkShippingCosts', '');
    }
}

export default UrlConstructionService;

/*_START_SOFA_DEFINE_*/
sofa.define('sofa.UrlConstructionService', function (configService) {
    return new UrlConstructionService(configService);
});
/*_END_SOFA_DEFINE_*/
