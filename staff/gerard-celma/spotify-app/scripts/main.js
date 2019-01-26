spotifyApi.token = 'BQA3BpD8l2cKgCoPfcE0fx3gyjXatudm6okSnOVnlMn638QbUmS1ggewxcPCpJZrAUQfU4GjJToZvq9K28q4ssEbJmZrgp2bmnEBM_d47yunTPwP_dVkDx4gZcQeqE4l1zCdHVIWI_2SMbjUSxM'

const searchPanel = new SearchPanel
const artistsPanel = new ArtistsPanel
const albumPanel = new AlbumPanel

const $root = $('#root')

artistsPanel.hide()
albumPanel.hide()

$root.append(searchPanel.$container)
$root.append(artistsPanel.$container)
$root.append(albumPanel.$container)

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

