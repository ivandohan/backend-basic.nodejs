function toTitleCase(str) {
    str = str.toString()
    str = str.toLowerCase()

    return str.replace(str[0], str[0].toUpperCase())
}

module.exports = toTitleCase