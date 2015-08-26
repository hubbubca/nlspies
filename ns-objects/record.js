/**
 * A fake nlobjRecord object.
 */
var nlobjRecord = function(){
};

/**
 *
 */
nlobjRecord.prototype.setFieldValue = function (){};

/**
 *
 */
nlobjRecord.prototype.commitLineItem = function (group, ignoreRecalc){};

/**
 *
 */
nlobjRecord.prototype.createCurrentLineItemSubrecord = function (sublist, fldname){};

/**
 *
 */
nlobjRecord.prototype.createSubrecord = function (fldname){};

/**
 *
 */
nlobjRecord.prototype.editCurrentLineItemSubrecord = function (sublist, fldname){};

/**
 *
 */
nlobjRecord.prototype.editSubrecord = function (fldname){};

/**
 *
 */
nlobjRecord.prototype.findLineItemMatrixValue = function (group, fldnam, column, val){};

/**
 *
 */
nlobjRecord.prototype.findLineItemValue = function (group, fldnam, value){};

/**
 *
 */
nlobjRecord.prototype.getAllFields = function (){};

/**
 *
 */
nlobjRecord.prototype.getAllLineItemFields = function (group){};

/**
 *
 */
nlobjRecord.prototype.getCurrentLineItemDateTimeValue = function (type, fieldId, timeZone){};

/**
 *
 */
nlobjRecord.prototype.getCurrentLineItemMatrixValue = function (group, fldnam, column){};

/**
 *
 */
nlobjRecord.prototype.getCurrentLineItemValue = function (type, fldnam){};

/**
 *
 */
nlobjRecord.prototype.getCurrentLineItemValues = function (type, fldnam){};

/**
 *
 */
nlobjRecord.prototype.getDateTimeValue = function (fieldId, timeZone){};

/**
 *
 */
nlobjRecord.prototype.getField = function (fldnam){};

/**
 *
 */
nlobjRecord.prototype.getFieldText = function (name){};

/**
 *
 */
nlobjRecord.prototype.getFieldTexts = function (name){};

/**
 *
 */
nlobjRecord.prototype.getFieldValue = function (name){};

/**
 *
 */
nlobjRecord.prototype.getFieldValues = function (name){};

/**
 *
 */
nlobjRecord.prototype.getId = function (){};

/**
 *
 */
nlobjRecord.prototype.getLineItemCount = function (group){};

/**
 *
 */
nlobjRecord.prototype.getLineItemDateTimeValue = function (type, fieldId, lineNum, timeZone){};

/**
 *
 */
nlobjRecord.prototype.getLineItemField = function (group, fldnam, linenum){};

/**
 *
 */
nlobjRecord.prototype.getLineItemMatrixField = function (group, fldnam, linenum, column){};

/**
 *
 */
nlobjRecord.prototype.getLineItemMatrixValue = function (group, fldnam, lineum, column){};

/**
 *
 */
nlobjRecord.prototype.getLineItemText = function (group, fldnam, linenum){};

/**
 *
 */
nlobjRecord.prototype.getLineItemValue = function (group, name, linenum){};

/**
 *
 */
nlobjRecord.prototype.getLineItemValues = function (type, fldnam, linenum){};

/**
 *
 */
nlobjRecord.prototype.getMatrixCount = function (group, fldnam){};

/**
 *
 */
nlobjRecord.prototype.getMatrixField = function (group, fldname, column){};

/**
 *
 */
nlobjRecord.prototype.getMatrixValue = function (group, fldnam, column){};

/**
 *
 */
nlobjRecord.prototype.getRecordType = function (){};

/**
 *
 */
nlobjRecord.prototype.insertLineItem = function (group, linenum, ignoreRecalc){};

/**
 *
 */
nlobjRecord.prototype.removeLineItem = function (group, linenum, ignoreRecalc){};

/**
 *
 */
nlobjRecord.prototype.removeCurrentLineItemSubrecord = function (sublist, fldname){};

/**
 *
 */
nlobjRecord.prototype.removeSubrecord = function (fldname){};

/**
 *
 */
nlobjRecord.prototype.selectLineItem = function (group, linenum){};

/**
 *
 */
nlobjRecord.prototype.selectNewLineItem = function (group){};

/**
 *
 */
nlobjRecord.prototype.setCurrentLineItemDateTimeValue = function (type, fieldId, dateTime, timeZone){};

/**
 *
 */
nlobjRecord.prototype.setCurrentLineItemMatrixValue = function (group, fldnam, column, value){};

/**
 *
 */
nlobjRecord.prototype.setCurrentLineItemValue = function (group, name, value){};

/**
 *
 */
nlobjRecord.prototype.setDateTimeValue = function (fieldId, dateTime, timeZone){};

/**
 *
 */
nlobjRecord.prototype.setFieldText = function (name, text){};

/**
 *
 */
nlobjRecord.prototype.setFieldTexts = function (name, text){};

/**
 *
 */
nlobjRecord.prototype.setFieldValue = function (name, value){};

/**
 *
 */
nlobjRecord.prototype.setFieldValues = function (name, value){};

/**
 *
 */
nlobjRecord.prototype.setLineItemDateTimeValue = function (type, fieldId, lineNum, dateTime, timeZone){};

/**
 *
 */
nlobjRecord.prototype.setLineItemValue = function (group, name, linenum, value){};

/**
 *
 */
nlobjRecord.prototype.setMatrixValue = function (group, fldnam, column, value){};

/**
 *
 */
nlobjRecord.prototype.viewCurrentLineItemSubrecord = function (sublist, fldname){};

/**
 *
 */
nlobjRecord.prototype.viewLineItemSubrecord = function (sublist, fldname, linenum){};

/**
 *
 */
nlobjRecord.prototype.viewSubrecord = function (fldname){};

/**
 * A fake nlobjCSVImport object.
 */
var nlobjCSVImport = function(){
};

/**
 *
 */
nlobjCSVImport.prototype.setLinkedFile = function (sublist, file){};

/**
 *
 */
nlobjCSVImport.prototype.setMapping = function (savedImport){};

/**
 *
 */
nlobjCSVImport.prototype.setOption = function (option, value){};

/**
 *
 */
nlobjCSVImport.prototype.setPrimaryFile = function (file){};

/**
 *
 */
nlobjCSVImport.prototype.setQueue = function (string){};
