spotifyApi.token = 'BQDteBtyfhYDIehJ40c-J8zzvKmqUP-hW934FGMokqOHQy8wXQ8Gq8D2NIsCBKpm0tE_e85k7cMw-J5361vanSZrUvH86m1v2cb0oNQ1t7TKDOiDEird32VioDO-5KcgwrIQOm5nuIXsuERuAog'

const searchPanel = new SearchPanel
const artistsPanel = new ArtistsPanel
const albumPanel = new AlbumPanel
const songsPanel = new SongsPanel

const $root = $('#root')

artistsPanel.hide()
albumPanel.hide()
songsPanel.hide()

$root.append(searchPanel.$container)
$root.append(artistsPanel.$container)
$root.append(albumPanel.$container)
$root.append(songsPanel.$container)


searchPanel.onSearch = function(query) {
    try {
        logic.searchArtists(query, function(error, artists) {
            if (error) searchPanel.error = error.message
            else {
                artistsPanel.artists = artists

                searchPanel.hide()

                artistsPanel.show()
            }
        })
    } catch(err) {

    }
}

artistsPanel.onArtistSelected = function(artistId) {
    try {
        logic.retrieveAlbums(artistId, function(error,albums) {
            if(error) searchPanel.error = error.message;
            else {
                albumPanel.clear();

                artistsPanel.hide();

                albumPanel.albums = albums;

                albumPanel.show();
            }
        });
    } catch (err) {
    }
}

albumPanel.onAlbumSelected = function(albumId) {
    try {
        logic.retrieveSongs(albumId, function(error,songs) {
            if(error) searchPanel.error = error.message;
            else {
                songsPanel.clear();

                albumPanel.hide();

                songsPanel.songs = songs;

                songsPanel.show();
            }
        });
    } catch (err){

    }
}

songsPanel.onGoBack = function() {
    songsPanel.hide();
    searchPanel.clear();
    searchPanel.show();
}