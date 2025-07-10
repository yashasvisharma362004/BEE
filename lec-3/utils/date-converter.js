// /utils/date-converter.js
// function formatDate(date) {
//     let formattedDate = new Date(date).toLocaleDateString();
//     return formattedDate;
// }

// function anotherFormat(date){
//     let formatedDate = new Date(date).toLocaleString();
//     return formatedDate;
// }

// module.exports = {formatDate,anotherFormat};

//this is the another method of exporting
// module.exports.formatDate = function(date){
//     let formatedDate = new Date(date).toLocaleDateString();
//     return formatedDate;
// }

// module.exports.anotherFormat = function(date){
//     let formatedDate = new Date(date).toLocaleString();
//     return formatedDate;
// }

// we make two funs

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports = {add,sub};

