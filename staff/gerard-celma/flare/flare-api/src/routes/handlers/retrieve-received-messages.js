const logic = require('../../logic')
const { handleResponseError } = require('../route-helper')

module.exports = (req, res) => {
    const { userId } = req
    debugger
    try {
        logic.retrieveReceivedMessages(userId)
            // .then(user => res.json(user))
            .then(res.json.bind(res))
            .catch(error => handleResponseError(error, res))
            debugger
    } catch (error) {
        handleResponseError(error, res)
    }
}