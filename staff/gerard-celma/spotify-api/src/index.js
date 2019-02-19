require('dotenv').config()

require('isomorphic-fetch')

const express = require('express')
const bodyParser = require('body-parser')

const spotifyApi = require('../src/spotify-api')

const { 
    register, 
    authenticate, 
    retrieve, 
    notFound,
    searchArtists,
    retrieveArtist,
    retrieveAlbums,
    retrieveAlbum,
    retrieveTracks,
    retrieveTrack
} = require('./routes')

const { env: { PORT, SPOTIFY_API_TOKEN }, argv: [, , port = PORT || 8080] } = process

spotifyApi.token = SPOTIFY_API_TOKEN

const app = express()

const jsonBodyParser = bodyParser.json()

const router = express.Router()


router.post('/user', jsonBodyParser, register)

router.post('/user/auth', jsonBodyParser, authenticate)

router.get('/user/:id', retrieve)

router.get('/artists', searchArtists)

router.get('/artists/:artistId', retrieveArtist)

router.get('/albums/:artistId', retrieveAlbums)

router.get('/album/:albumId', retrieveAlbum)

router.get('/tracks/:albumId', retrieveTracks)

router.get('/track/:trackId', retrieveTrack)

router.get('*', notFound)


app.use('/api', router)

app.listen(port, () => console.log(`server running on port ${port}`))