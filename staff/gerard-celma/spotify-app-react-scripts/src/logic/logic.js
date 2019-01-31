import users from '../data/data'
import spotifyApi from '../vendor/spotify-api/1.0.0/spotify-api-1.0.0'

spotifyApi.token = 'BQDgnygFk3LSyrroNS-KfPWoyfPzwDVc3lkdGVuccYr-tdIJhHSaGBBzs6ZYsGSgVVQ582uBUhuLQpJF_o_xMkroXztelWlFYiqt1nWcFYWnB1I_YG15mcXKY_QuVlnQxXc4rVE3m-OITqPYgIo'

const logic = {
    /**
     * Logins a user by its credentials.
     * 
     * @param {string} email 
     * @param {string} password 
     * @param {function} callback 
     */
    login: function (email, password, callback) {
        // TODO validate fields!

        var user = users.find(function (user) {
            return user.email === email;
        });

        if (!user) throw Error('user ' + email + ' not found');

        if (user.password !== password) throw Error('wrong password');

        var loggedInUser = {
            email: user.email
        };

        callback(loggedInUser);
    },
    
    /**
     * Registers a user.
     * 
     * @param {string} email 
     * @param {string} password 
     * @param {string} passwordConf
     * @param {function} callback 
     */
    register: function (email, password, passwordConf, callback) {
        if (typeof email !== 'string') throw TypeError(email + ' is not a string');

        if (email.indexOf("@") === -1) throw Error (email+ ' is incorrect')

        if (!email.trim().length) throw Error('email cannot be empty');

        if (typeof password !== 'string') throw TypeError(password + ' is not a string');

        if (!password.trim().length) throw Error('password cannot be empty');

        if (typeof passwordConf !== 'string') throw TypeError(passwordConf + ' is not a string');

        if (!passwordConf.trim().length) throw Error('password confirmation cannot be empty');

        var user = users.find(function (user) {
            return user.email === email;
        });

        if (user) throw Error('user ' + email + ' already exists');

        if (password !== passwordConf) throw Error('passwords do not match');

        users.push({
            email: email,
            password: password
        });

        callback();
    },

    /**
     * Search artists.
     * 
     * @param {string} query 
     * @param {function} callback 
     */
    searchArtists(query, callback) {
        if (typeof query !== 'string') throw TypeError(`${query} is not a string`)

        if(!query.trim().length) throw Error('query is empty')

        if (typeof callback !== 'function') throw TypeError(`${callback} is not a function`)

        spotifyApi.searchArtists(query, callback)
    },

    /**
     * Retrieves albums from artist.
     * 
     * @param {string} artistId 
     * @param {function} callback 
     */
    retrieveAlbums(artistId, callback) {
        if (typeof artistId !== 'string') throw TypeError(`${artistId} is not a string`)

        if(!artistId.trim().length) throw Error('artistId is empty')

        if (typeof callback !== 'function') throw TypeError(`${callback} is not a function`)

        spotifyApi.retrieveAlbums(artistId, callback)
    },

    /**
     * Retrieves songs from albums.
     * 
     * @param {string} albumId 
     * @param {function} callback 
     */
    retrieveSongs(albumId,callback) {
        if (typeof albumId !== 'string') throw TypeError(`${albumId} is not a string`)

        if(!albumId.trim().length) throw Error('songId is empty')

        if (typeof callback !== 'function') throw TypeError(`${callback} is not a function`)

        spotifyApi.retrieveSongs(albumId, callback)
    }
}

export default logic