var ErrorCruncher = {

    helloworld: function () {
        alert('hello world!');
    },
    getRandomNumber: function (max) {
        return Math.floor(Math.random() * max);
    },
    getColorOpacity: function(){
        return .5;
    },
    /**
     * 
     * @param {Function} callback 
     */
    getDataFileAsync: function (callback) {
        'use strict';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/files/1587734761.json', true);
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
        return Math.floor(Math.random() * Date.now());
    },

    /**
     * 
     * @returns {Array}
     */
    generateDummyErrors: function () {

        var count = 100;
        var errors = [];

        for (let i = 0; i < count; i++) {
            var error = {
                "Sequence": 1,
                "Host": ErrorCruncher.generateRandomHost(),
                "Type": ErrorCruncher.generateRandomType(),
                "Message": "message",
                "Source": ErrorCruncher.generateRandomSource(),
                "TimeEpoch": ErrorCruncher.generateRandomEpoch(),
                "StatusCode": "500",
                "PathInfo": "login.html",
                "HttpUserAgent": "mozilla",
                "HttpReferer": "somewhere.com"
            };

            errors.push(error);
        }
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
    /**
     * TODO
     * @param {Array} errors the array of errors
     * @param {Function} key callback of the item to group/aggregate by
     */
    aggregateErrorsByKey: function (errors, key) {
        const types = [...new Set(errors.map(item => key(item)))];

        var labelCountColorArr = [];
        for (let i = 0; i < types.length; i++) {
            let distinct = types[i];
            let count = errors.filter(item => key(item) === distinct).length;
            if (distinct !== '' && count > 100) {
                labelCountColorArr.push({
                    "label": distinct,
                    "count": count,
                    "color": `rgba(${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getColorOpacity()})`
                });
            }
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
                "color": `rgba(${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getColorOpacity()})`
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
                "color": `rgba(${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getRandomNumber(255)}, ${ErrorCruncher.getColorOpacity()})`
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
                return `${temp.getMonth()}-${temp.getDate()}`;
            }),
            counts = uniqueLabelCountColorArr.map(item => item.count),
            colors = uniqueLabelCountColorArr.map(item => item.color);

        return {
            "labels": labels,
            "data": counts,
            "colors": colors
        };
    }
};