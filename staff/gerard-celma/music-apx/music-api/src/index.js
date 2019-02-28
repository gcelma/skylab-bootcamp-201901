require('dotenv').config()

require('isomorphic-fetch')

const { MongoClient } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const spotifyApi = require('./spotify-api')
const users = require('./data/users')
const logic = require('./logic')

const { registerUser, authenticateUser, retrieveUser, searchArtists, retrieveArtist, retrieveAlbums, retrieveAlbum, retrieveTracks, retrieveTrack, addCommentToArtist, listCommentsFromArtist, notFound } = require('./routes')

const { env: { DB_URL, PORT, SPOTIFY_API_TOKEN, JWT_SECRET }, argv: [, , port = PORT || 8080] } = process


MongoClient.connect(DB_URL, { useNewUrlParser: true })
    .then(client => {
        const db = client.db()
        users.collection = db.collection('users')

        spotifyApi.token = SPOTIFY_API_TOKEN
        logic.jwtSecret = JWT_SECRET

        const app = express()

        const jsonBodyParser = bodyParser.json()

        const router = express.Router()

        function cors(req, res, next) {
            // res.set('access-control-allow-credentials', true)
            res.set('access-control-allow-headers', 'Accept, Authorization, Origin, Content-Type, Retry-After')
            // res.set('access-control-allow-methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH')
            res.set('access-control-allow-origin', '*')
            // res.set('access-control-max-age', 604800)

            next()
        }

        router.use(cors)

        router.post('/user', jsonBodyParser, registerUser)

        router.post('/user/auth', jsonBodyParser, authenticateUser)

        router.get('/user/', retrieveUser)

        router.get('/artists', searchArtists)

        router.get('/artist/:artistId', retrieveArtist)

        router.get('/artist/:artistId/albums', retrieveAlbums)

        router.get('/album/:albumId', retrieveAlbum)

        router.get('/album/:albumId/tracks', retrieveTracks)

        router.get('/track/:trackId', retrieveTrack)

        router.post('/artist/:artistId/comment', jsonBodyParser, addCommentToArtist)

        router.get('/artist/:artistId/comment', listCommentsFromArtist)


        

        

        // app.get('*', notFound)

        app.use('/api', router)

        app.listen(port, () => console.log(`server running on port ${port}`))
    })
    .catch(console.error)
