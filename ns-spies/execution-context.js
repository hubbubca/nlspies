/**
 * Spies for execution context related functions.
 */
window.nlapiGetContext = jasmine.createSpy('nlapiGetContext() spy').and.callFake(function() {
	return new nlobjContext();
});

window.nlapiGetDepartment = jasmine.createSpy('nlapiGetDepartment() spy');
window.nlapiGetLocation = jasmine.createSpy('nlapiGetLocation() spy');
window.nlapiGetRole = jasmine.createSpy('nlapiGetRole() spy');
window.nlapiGetSubsidiary = jasmine.createSpy('nlapiGetSubsidiary() spy');
window.nlapiGetUser = jasmine.createSpy('nlapiGetUser() spy');
window.nlapiLogExecution = jasmine.createSpy('nlapiLogExecution() spy');