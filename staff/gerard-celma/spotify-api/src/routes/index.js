module.exports = {
    register: require('./register'),

    authenticate: require('./authenticate'),

    retrieve: require('./retrieve'),

    notFound: require('./not-found'),

    searchArtists: require('./search-artists'),

    retrieveArtist: require('./retrieve-artist'),

    retrieveAlbums: require('./retrieve-albums'),

    retrieveAlbum: require('./retrieve-album'),

    retrieveTracks: require('./retrieve-tracks'),

    retrieveTrack: require('./retrieve-track'),
}