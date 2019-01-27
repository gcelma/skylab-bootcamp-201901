spotifyApi.token = 'BQA6GYhVjr9sknLWP6TjXNzYm0167EDyCU3ISFEIx3tuL-5CNskFJuOhj2EcdQSbud_5pogEe9F9fwKM6BSeacoOLYw0UvJ8sryBSHTJ1irhjgCH0vOCGn0wxWLKiKr4KgjUEGPqJB98HrMsA2A'

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
