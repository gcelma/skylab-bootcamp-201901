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

app.post('/register', jsonBodyParser, register.post)

app.post('/authenticate', jsonBodyParser, authenticate.post)

app.get('/retrieve/:id', retrieve.get)

app.get('/searchArtists/:query', searchArtists.get)

app.get('/retrieveArtist/:artistId', retrieveArtist.get)

app.get('/retrieveAlbums/:artistId', retrieveAlbums.get)

app.get('/retrieveAlbum/:albumId', retrieveAlbum.get)

app.get('/retrieveTracks/:albumId', retrieveTracks.get)

app.get('/retrieveTrack/:trackId', retrieveTrack.get)

app.get('*', notFound.get)

app.listen(port, () => console.log(`server running on port ${port}`))