/**
 * Spies for File related functions.
 */
window.nlapiCreateFile = jasmine.createSpy('nlapiCreateFile() spy');
window.nlapiDeleteFile = jasmine.createSpy('nlapiDeleteFile() spy');
window.nlapiLoadFile = jasmine.createSpy('nlapiLoadFile() spy');
window.nlapiLoadFile.and.callFake(function(id) {
    return new nlobjFile();
});
window.nlapiSubmitFile = jasmine.createSpy('nlapiSubmitFile() spy');