module.exports = {
    ...require('./users'),
    ...require('./tags'),
    ...require('/reviews'),
    ...require('/speedruns'),
    ...require('speedrunTag')
}