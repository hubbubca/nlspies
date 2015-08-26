/**
 *  Custom matchers for Jasmine.
 */
var customMatchers = {
	isValidSplitDate : function isValidSplitDate(splitDate) {
		return splitDate && !isNaN(splitDate.year) && !isNaN(splitDate.month)
						&& !isNaN(splitDate.day);
	},
	convertSplitDateToDate : function convertSplitDateToDate(splitDate) {
		if (isValidSplitDate(splitDate)) {
			splitDate = new Date(splitDate.year, splitDate.month - 1, splitDate.day);
		}
		return splitDate;
	},

	toEqualDate: function (expectedDate) {
        var areDates;

        expectedDate = this.convertSplitDateToDate(expectedDate);
        this.actual = this.convertSplitDateToDate(this.actual);

        areDates = this.actual instanceof Date && expectedDate instanceof Date;

        //Jasmine will look for this function and utilize it for custom error messages
        this.message = function () {
            if (areDates) {
                return "Expected date of " + this.actual + " to be " + expectedDate;
            }
            return "Expected " + this.actual + " and " + expectedDate + " to be valid Date/SplitDate objects. They were not.";
        };

        if (areDates) {
            //Ultimately Jasmine expects a matcher to return true or false
            return (this.actual.getTime() === expectedDate.getTime());
        }

        return false;
    }
};