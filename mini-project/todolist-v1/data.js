let list = [
    'Workout',
    'Web Development',
]

const options = {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'long',
}

const day = new Date().toLocaleDateString('id-ID', options)


module.exports = {list, day}