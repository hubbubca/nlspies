/**
 * Spies for communications.
 * 
 * Example of a customized return you'd add to your test.
 * window.nlapiResolveURL.and.returnValue('/app/common/custom/custrecordentry.nl?rectype=86&id=1151');
 */
window.nlapiOutboundSSO = jasmine.createSpy('nlapiOutboundSSO() spy');
window.nlapiResolveURL = jasmine.createSpy('nlapiResolveURL() spy');
window.nlapiSendCampaignEmail = jasmine.createSpy('nlapiSendCampaignEmail() spy');
window.nlapiSendEmail = jasmine.createSpy('nlapiSendEmail() spy');
window.nlapiSendFax = jasmine.createSpy('nlapiSendFax() spy');