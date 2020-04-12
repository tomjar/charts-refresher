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
        const types = [...new Set(errors.map(item => item.Type))];

        var labelAndCountsArr = [];
        for(let i = 0; i < types.length; i++){
            let distinct = types[i];

            let count = errors.filter(error => error.Type === distinct).length;
            labelAndCountsArr.push({"label": distinct, "count":count });
        }

        var labels = labelAndCountsArr.map(item => item.label);
        var counts = labelAndCountsArr.map(item => item.count);
        
        return {"labels":labels,"data": counts};
    },
    // TODO: ErrorsByUser
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByUser: function (errors) {
        const users = [...new Set(errors.map(item => item.User))];

        var labelAndCountsArr = [];
        for(let i = 0; i < users.length; i++){
            let distinct = users[i];

            let count = errors.filter(error => error.User === distinct).length;
            labelAndCountsArr.push({"label": distinct, "count":count });
        }

        var labels = labelAndCountsArr.map(item => item.label);
        var counts = labelAndCountsArr.map(item => item.count);
        
        return {"labels":labels,"data": counts};
    },
    // TODO: ErrorsByDistricts
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByHost: function (errors) {
        const hosts = [...new Set(errors.map(item => item.Host))];

        var labelAndCountsArr = [];
        for(let i = 0; i < hosts.length; i++){
            let distinct = hosts[i];

            let count = errors.filter(error => error.Host === distinct).length;
            labelAndCountsArr.push({"label": distinct, "count":count });
        }

        var labels = labelAndCountsArr.map(item => item.label);
        var counts = labelAndCountsArr.map(item => item.count);
        
        return {"labels":labels,"data": counts};
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