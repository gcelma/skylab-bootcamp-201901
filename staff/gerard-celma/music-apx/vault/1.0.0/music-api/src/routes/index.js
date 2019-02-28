module.exports = {
    registerUser: require('./register-user'),

    authenticateUser: require('./authenticate-user'),

    retrieveUser: require('./retrieve-user'),

    searchArtists: require('./search-artists'),

    retrieveArtist: require('./retrieve-artist'),

    retrieveAlbums: require('./retrieve-albums'),

    retrieveAlbum: require('./retrieve-album'),

    retrieveTracks: require('./retrieve-tracks'),

    retrieveTrack: require('./retrieve-track'),

    addCommentToArtist: require('./add-comment-to-artist'),

    listCommentsFromArtist: require('./list-comments-from-artist'),

    // TODO other route handlers

    notFound: require('./not-found')
}