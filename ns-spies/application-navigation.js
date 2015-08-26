/**
 * Spies for Application Navigation related functions.
 */
window.nlapiRequestURL = jasmine.createSpy('nlapiRequestURL() spy');
window.nlapiRequestURLWithCredentials = jasmine.createSpy('nlapiRequestURLWithCredentials() spy');
window.nlapiResolveURL = jasmine.createSpy('nlapiResolveURL() spy');
window.nlapiSetRedirectURL = jasmine.createSpy('nlapiSetRedirectURL() spy');