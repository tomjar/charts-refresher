var ErrorCruncher = {

    helloworld: function () {
        alert('hello world!');
    },

    /**
     * 
     * @returns {Array}
     */
    generateDummyErrors: function () {

        var count = 10000;
        var errors = [];

        for (let i = 0; i < count; i++) {
            var error =
            {
                "errorId": -1,
                "Application": "defaultapplication",
                "Host": "defaulthost",
                "Type": "defaulttype",
                "Source": "defaultsource",
                "Message": "defaultmessage",
                "User": "defaultuser",
                "StatusCode": "defaultstatuscode",
                "TimeUTC": new Date(),
                "Sequence": -1,
                "AllXML": "defaultAllXML"
            };

            errors.push(error);
        }

        return errors;
    },

    // pies/doughnuts
    // TODO: ErrorsByType
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByType: function (errors) {

    },
    // TODO: ErrorsByUser
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByUser: function (errors) {

    },
    // TODO: ErrorsByDistricts
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByHost: function (errors) {

    },

    // line
    // TODO: ErrorsByDay
    errorsByDay: function (errors) {

    },
    // TODO: ErrorsByMonth
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByMonth: function (errors) {

    },
    // TODO: ErrorsByHour? maybe
    errorsByHour: function (errors) {

    }


































};