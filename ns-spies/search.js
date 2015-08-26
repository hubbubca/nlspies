/**
 * Spies for search related functions.
 */
window.nlapiCreateSearch = jasmine.createSpy('nlapiCreateSearch() spy');
window.nlapiCreateSearch.and.callFake(function(type, filters, columns) {
	return new nlobjSearch();
});

window.nlapiLoadSearch = jasmine.createSpy('nlapiLoadSearch() spy');
window.nlapiLookupField = jasmine.createSpy('nlapiLookupField() spy');
window.nlapiSearchDuplicate = jasmine.createSpy('nlapiSearchDuplicate() spy');
window.nlapiSearchGlobal = jasmine.createSpy('nlapiSearchGlobal() spy');
window.nlapiSearchRecord = jasmine.createSpy('nlapiSearchRecord() spy');