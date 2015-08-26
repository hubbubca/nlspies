/**
 * Spies for Date related functions.
 */
window.nlapiAddDays = jasmine.createSpy('nlapiAddDays() spy');
window.nlapiAddMonths = jasmine.createSpy('nlapiAddMonths() spy');
window.nlapiDateToString = jasmine.createSpy('nlapiDateToString() spy');
window.nlapiDateToString.and.callFake(function(date) {
	return Dates.format(date, 'mm/dd/yyyy');
});
window.nlapiStringToDate = jasmine.createSpy('nlapiStringToDate() spy');