var ErrorCruncher = {

    helloworld: function () {
        alert('hello world!');
    },
    getRandomNumber: function (max) {
        return Math.floor(Math.random() * max);
    },
    /**
     * 
     * @param {Function} callback 
     */
    getDataFileAsync: function (callback) {
        'use strict';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/files/data.json', true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onreadystatechange = function () {
            // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                callback(xhr.response);
            }
        };

        xhr.onerror = function (e) {
            console.warn("Error occurred: ".concat(e, " Status: ").concat(xhr.statusText));
        };

        xhr.send();
    },
    generateRandomHost: function () {
        var hosts = [
            "localhost:8080",
            "localhost:8081",
            "localhost:8082",
            "localhost:8083",
            "localhost:8084",
            "localhost:8085",
            "localhost:8086",
            "localhost:8087",
            "localhost:8088",
            "localhost:8089"
        ];
        var host = hosts[Math.floor(Math.random() * hosts.length)];

        return host;
    },

    generateRandomType: function () {
        var types = [
            "AggregateException",
            "ArithmeticException",
            "DivideByZeroException",
            "FormatException",
            "InsufficientMemoryException",
            "MissingMethodException",
            "NullReferenceException",
            "OutOfMemoryException",
            "StackOverflowException",
            "UnauthorizedAccessException"
        ];

        var type = types[Math.floor(Math.random() * types.length)];

        return type;
    },

    generateRandomUser: function () {
        var users = [
            "Bob",
            "John",
            "Henry",
            "Karen",
            "Sarah",
            "Ender",
            "Mister LLama",
            "Luke Skywalker",
            "Josh",
            "Wonder Woman"
        ];

        var user = users[Math.floor(Math.random() * users.length)];

        return user;
    },
    generateRandomSource: function () {
        var sources = [
            "home.html",
            "login.html",
            "other.html",
            "about.html",
            "contact.html",
            "notification.html",
            "dothething.html",
            "otherthing.html",
            "amazing.html",
            "wow.html"
        ];

        var source = sources[Math.floor(Math.random() * sources.length)];

        return source;
    },
    generateRandomEpoch: function () {
        // 1586736047 today

        return Math.floor(Math.random() * Date.now());
    },

    /**
     * 
     * @returns {Array}
     */
    generateDummyErrors: function () {

        var count = 10000;
        var errors = [];

        for (let i = 0; i < count; i++) {
            var error = {
                "errorId": -1,
                "Application": "defaultapplication",
                "Host": ErrorCruncher.generateRandomHost(),
                "Type": ErrorCruncher.generateRandomType(),
                "Source": ErrorCruncher.generateRandomSource(),
                "Message": "defaultmessage",
                "User": ErrorCruncher.generateRandomUser(),
                "StatusCode": "defaultstatuscode",
                "TimeEpoch": ErrorCruncher.generateRandomEpoch(),
                "Sequence": -1,
                "AllXML": "defaultAllXML"
            };

            errors.push(error);
        }
        // var _100 = errors.slice(0, 99);
        //console.log(JSON.stringify(_100));
        return errors;
    },
    getMonthName: function (monthNumber) {
        switch (monthNumber) {
            case 0:
                return 'January';
            case 1:
                return 'Feburary';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
        }
    },

    // pies/doughnuts
    // TODO: ErrorsByType
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByType: function (errors) {
        const types = [...new Set(errors.map(item => item.Type))];

        var labelCountColorArr = [];
        for (let i = 0; i < types.length; i++) {
            let distinct = types[i];

            let count = errors.filter(error => error.Type === distinct).length;
            labelCountColorArr.push({
                "label": distinct,
                "count": count,
                "color": `rgba(${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, 0.2)`
            });
        }

        var labels = labelCountColorArr.map(item => item.label);
        var counts = labelCountColorArr.map(item => item.count);
        var colors = labelCountColorArr.map(item => item.color);

        return {
            "labels": labels,
            "data": counts,
            "colors": colors
        };
    },
    // TODO: ErrorsByUser
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByUser: function (errors) {
        const users = [...new Set(errors.map(item => item.User))];

        var labelCountColorArr = [];
        for (let i = 0; i < users.length; i++) {
            let distinct = users[i];

            let count = errors.filter(error => error.User === distinct).length;
            labelCountColorArr.push({
                "label": distinct,
                "count": count,
                "color": `rgba(${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, 0.2)`
            });
        }

        var labels = labelCountColorArr.map(item => item.label);
        var counts = labelCountColorArr.map(item => item.count);
        var colors = labelCountColorArr.map(item => item.color);

        return {
            "labels": labels,
            "data": counts,
            "colors": colors
        };
    },
    // TODO: ErrorsByDistricts
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByHost: function (errors) {
        const hosts = [...new Set(errors.map(item => item.Host))];

        var labelCountColorArr = [];
        for (let i = 0; i < hosts.length; i++) {
            let distinct = hosts[i];

            let count = errors.filter(error => error.Host === distinct).length;
            labelCountColorArr.push({
                "label": distinct,
                "count": count,
                "color": `rgba(${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, 0.2)`
            });
        }

        var labels = labelCountColorArr.map(item => item.label);
        var counts = labelCountColorArr.map(item => item.count);
        var colors = labelCountColorArr.map(item => item.color);

        return {
            "labels": labels,
            "data": counts,
            "colors": colors
        };
    },
    /**
     * 
     * @param {Array} errors 
     */
    errorsBySource: function (errors) {
        const sources = [...new Set(errors.map(item => item.Source))];

        var labelCountColorArr = [];
        for (let i = 0; i < sources.length; i++) {
            let distinct = sources[i];

            let count = errors.filter(error => error.Source === distinct).length;
            labelCountColorArr.push({
                "label": distinct,
                "count": count,
                "color": `rgba(${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, 0.2)`
            });
        }

        var labels = labelCountColorArr.map(item => item.label),
            counts = labelCountColorArr.map(item => item.count),
            colors = labelCountColorArr.map(item => item.color);

        return {
            "labels": labels,
            "data": counts,
            "colors": colors
        };
    },
    // TODO: ErrorsByMonth
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByMonth: function (errors) {

        // var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        // var hours = date.getHours();
        // console.log(errors);
        const months = [...new Set(errors
                .map(item => new Date(item.TimeEpoch).getMonth()))]
            .sort(function (a, b) {
                return a - b;
            });

        // console.log(months);
        var labelCountColorArr = [];
        for (let i = 0; i < months.length; i++) {
            let distinct = months[i];

            let count = errors.filter(error => new Date(error.TimeEpoch).getMonth() === distinct).length;
            labelCountColorArr.push({
                "label": distinct,
                "count": count,
                "color": `rgba(${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, 0.2)`
            });
        }

        var labels = labelCountColorArr.map(item => ErrorCruncher.getMonthName(item.label)),
            counts = labelCountColorArr.map(item => item.count),
            colors = labelCountColorArr.map(item => item.color);

        return {
            "labels": labels,
            "data": counts,
            "colors": colors
        };
    },
    // TODO: ErrorsByMonth
    /**
     * TODO
     * @param {Array} errors 
     */
    errorsByDay: function (errors) {

        // var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        // var hours = date.getHours();
        // console.log(errors);
        const days = [...new Set(errors
                .map(function (item) {
                    let temp = new Date(item.TimeEpoch);
                    temp.setMinutes(0);
                    temp.setSeconds(0);
                    temp.setMilliseconds(0);
                    temp.setHours(0);
                    return temp;
                }))]
            .sort(function (a, b) {
                return a.getTime() - b.getTime();
            });

        // console.log(days);
        var labelCountColorArr = [];
        for (let i = 0; i < days.length; i++) {
            let distinct = days[i];

            let grouped = errors.filter(function (error) {
                let temp = new Date(error.TimeEpoch);
                temp.setMinutes(0);
                temp.setSeconds(0);
                temp.setMilliseconds(0);
                temp.setHours(0);
                return temp.getTime() === distinct.getTime();
            });

            labelCountColorArr.push({
                "label": grouped[0].TimeEpoch,
                "count": grouped.length,
                "color": `rgba(${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, 0.2)`
            });
        }

        /**
         * Source: https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
         * @param {Array} a 
         * @param {Function} key 
         */
        function uniqBy(a, key) {
            let seen = new Set();
            return a.filter(item => {
                let k = key(item);
                return seen.has(k) ? false : seen.add(k);
            });
        }

        var uniqueLabelCountColorArr = uniqBy(labelCountColorArr, function (item) {
            return item.label;
        });


        var labels = uniqueLabelCountColorArr.map(function (item) {
                let temp = new Date(item.label);
                temp.setMinutes(0);
                temp.setSeconds(0);
                temp.setMilliseconds(0);
                temp.setHours(0);
                return temp;
            }),
            counts = uniqueLabelCountColorArr.map(item => item.count),
            colors = uniqueLabelCountColorArr.map(item => item.color);

        return {
            "labels": labels,
            "data": counts,
            "colors": colors
        };
    },
    // TODO: ErrorsByHour? maybe
    errorsByHour: function (errors) {

    }
};