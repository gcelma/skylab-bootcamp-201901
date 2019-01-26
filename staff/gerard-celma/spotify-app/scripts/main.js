spotifyApi.token = 'BQDiqpdWNlnfqXa39n3gl7lp5RIj5sym9vYz4VkwugPJJVBnVrVUlwhaRjibt8qP2vlsJSR9KoGt35vHOVGK6785SPJk3S6YC5Dr2WMYflGcKJDIdJvnIeW_R9iFoGRqcHQECvbaB65u8VV-D2A'

const searchPanel = new SearchPanel
const artistsPanel = new ArtistsPanel

const $root = $('#root')

artistsPanel.hide()

$root.append(searchPanel.$container)
$root.append(artistsPanel.$container)

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

