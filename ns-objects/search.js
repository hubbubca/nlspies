/**
 * A fake nlapiSearchColumn object.
 */
var nlobjSearchColumn = function (name, join, summary) {
};

nlobjSearchColumn.prototype.getFormula = function () {
};

nlobjSearchColumn.prototype.getFunction = function () {
};

nlobjSearchColumn.prototype.getJoin = function () {
};

nlobjSearchColumn.prototype.getLabel = function () {
};

nlobjSearchColumn.prototype.getName = function () {
};

nlobjSearchColumn.prototype.getSort = function () {
};

nlobjSearchColumn.prototype.getSummary = function () {
};

nlobjSearchColumn.prototype.setFormula = function (formula) {
};

nlobjSearchColumn.prototype.setFunction = function (functionid) {
};

nlobjSearchColumn.prototype.setLabel = function (label) {
};

nlobjSearchColumn.prototype.setSort = function (order) {
};

nlobjSearchColumn.prototype.setWhenOrderedBy = function (name, join) {
};

/**
 * A fake nlapiSearchFilter object.
 */
var nlobjSearchFilter = function (name, join, operator, value1, value2) {
};

nlobjSearchFilter.prototype.getFormula = function () {
};

nlobjSearchFilter.prototype.getJoin = function () {
};

nlobjSearchFilter.prototype.getName = function () {
};

nlobjSearchFilter.prototype.getSummaryType = function () {
};

nlobjSearchFilter.prototype.getOperator = function () {
};

nlobjSearchFilter.prototype.setFormula = function (formula) {
};

nlobjSearchFilter.prototype.setSummaryType = function (type) {
};


/**
 * A fake nlobjSearchResult object.
 */
var nlobjSearchResult = function (data, id) {
    this.data = data;
    this.id = id;
};

nlobjSearchResult.prototype.getAllColumns = function () {
};

nlobjSearchResult.prototype.getRecordType = function () {
};

nlobjSearchResult.prototype.getText = function (column) {
};

nlobjSearchResult.prototype.getText = function (name, join, summary) {
};

/**
 * Pass in the key name you'd like returned from the data object you added
 * @param key
 * @returns value
 */
nlobjSearchResult.prototype.getValue = function (key) {
    if (this.data.hasOwnProperty(key)) {
        return this.data[key];
    }
};

/**
 *  Adds the getId method to the SearchResult object
 */
nlobjSearchResult.prototype.getId = function () {
    return this.id;
};

/**
 * A fake nlobjSearchResultSet object.
 */
var nlobjSearchResultSet = function (data) {
    this.init(data);
};

nlobjSearchResultSet.prototype.forEachResult = function (callback) {
};
nlobjSearchResultSet.prototype.getColumns = function () {
};

/**
 * Add the getResults() and have it return our faked results
 * @returns {Array}
 */
nlobjSearchResultSet.prototype.getResults = function (start, end) {
    return this.results;
};

/**
 * Initialize the search result using the supplied [{"key":" value"},{"key":" value"},...]
 *
 * @param data
 * @returns {Array}
 */
nlobjSearchResultSet.prototype.init = function (data) {
    var results = [];
    for (var i = 0; i < data.length; i++) {
        datum = data[i];
        results = results.concat(new nlobjSearchResult(datum));
    }
    this.results = results;
};

/**
 * A fake nlobjSearch object.
 */
var nlobjSearch = function () {
};

nlobjSearch.prototype.addColumn = function (column) {
};

nlobjSearch.prototype.addColumns = function (columns) {
};

nlobjSearch.prototype.addFilter = function (filter) {
};

nlobjSearch.prototype.addFilters = function (filters) {
};

nlobjSearch.prototype.deleteSearch = function () {
};

nlobjSearch.prototype.getColumns = function () {
};

nlobjSearch.prototype.getFilterExpression = function () {
};

nlobjSearch.prototype.getFilters = function () {
};

nlobjSearch.prototype.getId = function () {
};

nlobjSearch.prototype.getIsPublic = function () {
};

nlobjSearch.prototype.getScriptId = function () {
};

nlobjSearch.prototype.getSearchType = function () {
};

nlobjSearch.prototype.runSearch = function () {
    return new nlobjSearchResultSet();
};

nlobjSearch.prototype.saveSearch = function (title, scriptId) {
};

nlobjSearch.prototype.setColumns = function (columns) {
};

nlobjSearch.prototype.setFilterExpression = function (filterExpression) {
};


nlobjSearch.prototype.setFilters = function (filters) {
};

nlobjSearch.prototype.setIsPublic = function (type) {
};

nlobjSearch.prototype.setRedirectURLToSearch = function () {
};

nlobjSearch.prototype.setRedirectURLToSearchResults = function () {
};
