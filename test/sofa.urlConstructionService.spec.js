'use strict';
/* global sofa */

describe('sofa.UrlConstructionService', function () {

    var urlConstructionService;

    beforeEach(function () {
        var configService = new sofa.ConfigService();
        urlConstructionService = new sofa.UrlConstructionService(configService);
    });

    it('should be defined', function () {
        expect(urlConstructionService).toBeDefined();
    });

    it('should have a method createUrlForRootCategory', function () {
        expect(urlConstructionService.createUrlForRootCategory).toBeDefined();
    });

    it('should have a method createUrlForCart', function () {
        expect(urlConstructionService.createUrlForCart).toBeDefined();
    });

    it('should have a method createUrlForCheckout', function () {
        expect(urlConstructionService.createUrlForCheckout).toBeDefined();
    });

    it('should have a method createUrlForSummary', function () {
        expect(urlConstructionService.createUrlForSummary).toBeDefined();
    });

    it('should have a method createUrlForShippingCostsPage', function () {
        expect(urlConstructionService.createUrlForShippingCostsPage).toBeDefined();
    });

    describe('sofa.UrlConstructionService#createUrlForContentPage', function () {

        it('should be a function', function () {
            expect(typeof urlConstructionService.createUrlForContentPage).toBe('function');
        });

        it('should return a string', function () {
            expect(typeof urlConstructionService.createUrlForContentPage()).toBe('string');
        });

        it('should return url for products', function () {
            expect(urlConstructionService.createUrlForContentPage('foo')).toEqual('/pages/foo');
        });
    });

    describe('sofa.UrlConstructionService#createUrlForRootCategory', function () {

        it('should be a function', function () {
            expect(typeof urlConstructionService.createUrlForRootCategory).toBe('function');
        });

        it('should return a string', function () {
            expect(typeof urlConstructionService.createUrlForRootCategory()).toBe('string');
        });

        it('should return url for roo category', function () {
            expect(urlConstructionService.createUrlForRootCategory()).toEqual('');
        });
    });

    describe('sofa.UrlConstructionService#createUrlForCart', function () {

        it('should be a function', function () {
            expect(typeof urlConstructionService.createUrlForCart).toBe('function');
        });

        it('should return a string', function () {
            expect(typeof urlConstructionService.createUrlForCart()).toBe('string');
        });

        it('should return url for cart', function () {
            expect(urlConstructionService.createUrlForCart()).toEqual('/cart');
        });
    });

    describe('sofa.UrlConstructionService#createUrlForCheckout', function () {

        it('should be a function', function () {
            expect(typeof urlConstructionService.createUrlForCheckout).toBe('function');
        });

        it('should return a string', function () {
            expect(typeof urlConstructionService.createUrlForCheckout()).toBe('string');
        });

        it('should return url for checkout', function () {
            expect(urlConstructionService.createUrlForCheckout()).toEqual('/checkout');
        });
    });

    describe('sofa.UrlConstructionService#createUrlForSummary', function () {

        it('should be a function', function () {
            expect(typeof urlConstructionService.createUrlForSummary).toBe('function');
        });

        it('should return a string', function () {
            expect(typeof urlConstructionService.createUrlForSummary()).toBe('string');
        });

        it('should return url for summary', function () {
            expect(urlConstructionService.createUrlForSummary('foo')).toEqual('/summary/foo');
        });
    });

    describe('sofa.UrlConstructionService#createUrlForShippingCostsPage', function () {

        it('should be a function', function () {
            expect(typeof urlConstructionService.createUrlForShippingCostsPage).toBe('function');
        });

        it('should return a string', function () {
            expect(typeof urlConstructionService.createUrlForShippingCostsPage()).toBe('string');
        });

        it('should return url for shipping costs', function () {
            expect(urlConstructionService.createUrlForShippingCostsPage()).toEqual('/pages/');
        });
    });
});
