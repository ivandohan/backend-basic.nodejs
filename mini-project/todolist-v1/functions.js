const {list, day} = require('./data')

function toTitleCase(str) {
    str = str.toString()
    str = str.toLowerCase()

    return str.replace(str[0], str[0].toUpperCase())
}

function getDate() {
    return day
}

function getList() {
    return list
}

function setList(newList) {
    list.push(toTitleCase(newList))
}

module.exports = {getDate, getList, setList}