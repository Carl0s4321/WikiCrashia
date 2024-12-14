const express = require('express');
const database = require('./connect');


// this is in UTC format btw
const months = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
};

function convertToDate(dateStr, timeStr) {
    const [month, day, year] = dateStr.split(" ");

    let [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);

    if (hours < 12  && period.toLowerCase() === "p.m.") {
        hours += 12;
    } else if (hours == 12 && period.toLowerCase() === "a.m.") {
        hours = 0;
    }

    return new Date(
        parseInt(year),
        months[month],
        parseInt(day),
        hours,
        minutes
    
    )

}
module.exports = {convertToDate};