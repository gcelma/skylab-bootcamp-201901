//#region Panel

class Panel {
    constructor($container) {
        this.$container = $container
    }

    show() {
        this.$container.show()
    }

    hide() {
        this.$container.hide()
    }
}

//#endregion

//#region SearchPanel

class SearchPanel extends Panel {
    constructor() {
        super($(`<section class="search container">
        <h2>Search</h2>
    <form>
        <input type="text" name="query" placeholder="Search an artist...">
        <button type="submit">Search</button>
    </form>
</section>`))

        this.__$form__ = this.$container.find('form')
        this.__$query__ = this.__$form__.find('input')
    }

    set onSearch(callback) {
        this.__$form__.on('submit', event => {
            event.preventDefault()

            const query = this.__$query__.val()

            callback(query)
        })
    }
}

//#endregion

//#region ArtistsPanel

class ArtistsPanel extends Panel {
    constructor() {
        super($(`<section class="results container">
    <h3>Artists</h3>
    <ul></ul>
</section`))

        this.__$list__ = this.$container.find('ul')
    }

    set artists(artists) {
        artists.forEach(({ id, name }) => {
            const $item = $(`<li data-id=${id}>${name}</li>`)

            $item.click(() =>{
                const id = $item.data('id')
                this.__onArtistSelected__(id)
            });

            this.__$list__.append($item)
        });
    }

    set onArtistSelected(callback) {
        this.__onArtistSelected__ = callback;
    }
}

//#endregion

//#region AlbumPanel

class AlbumPanel extends Panel {
    constructor() {
        super($(`<section class="albums container">
    <h3>Albums</h3>
    <ul></ul>
</section`));

        this.__$albumslist__ = this.$container.find('ul')
    }

    set albums(albums) {
        albums.forEach(({ id, name }) => {
            const $item = $(`<li data-id=${id}>${name}</li>`)

            $item.click(() =>{
                const id = $item.data('id')
                this.__onAlbumSelected__(id)
            });

            this.__$albumslist__.append($item)
        })
    }

    clear() {
        this.__$albumslist__.empty()
    }
}

//#endregion