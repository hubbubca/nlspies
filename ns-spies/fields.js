/**
 * Spies for field related functions.
 */
window.nlapiDisableField = jasmine.createSpy('nlapiDisableField() spy');
window.nlapiGetField = jasmine.createSpy('nlapiGetField() spy');
window.nlapiGetFieldText = jasmine.createSpy('nlapiGetFieldText() spy');
window.nlapiGetFieldTexts = jasmine.createSpy('nlapiGetFieldTexts() spy');
window.nlapiGetFieldValue = jasmine.createSpy('nlapiGetFieldValue() spy');
window.nlapiGetFieldValue.and.callFake(function(field) {});
window.nlapiGetFieldValues = jasmine.createSpy('nlapiGetFieldValues() spy');
window.nlapiInsertSelectOption = jasmine.createSpy('nlapiInsertSelectOption() spy');
window.nlapiLookupField = jasmine.createSpy('nlapiLookupField() spy');
window.nlapiRemoveSelectOption = jasmine.createSpy('nlapiRemoveSelectOption() spy');
window.nlapiSetFieldText = jasmine.createSpy('nlapiSetFieldText() spy');
window.nlapiSetFieldTexts  = jasmine.createSpy('nlapiSetFieldTexts() spy');
window.nlapiSetFieldValue = jasmine.createSpy('nlapiSetFieldValue() spy');
window.nlapiSetFieldValues = jasmine.createSpy('nlapiSetFieldValues() spy');
window.nlapiSubmitField = jasmine.createSpy('nlapiSubmitField() spy');
window.nlapiSubmitField.and.callFake(function(type, id, fields, values, doSourcing) {});