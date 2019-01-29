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
        <input type="text" name="query" placeholder="Search an artist..." class="form-control">
        <button type="submit" class="btn btn-light">Search</button>
    </form>
</section>`))

        this.__$form__ = this.$container.find('form')
        this.__$input__ = this.$container.find('input')
        this.__$query__ = this.__$form__.find('input')
    }

    set onSearch(callback) {
        this.__$form__.on('submit', event => {
            event.preventDefault()

            const query = this.__$query__.val()

            callback(query)
        })
    }

    clear() {
        this.__$input__.val('');
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

    set onAlbumSelected(callback) {
        this.__onAlbumSelected__ = callback;
    }

    clear() {
        this.__$albumslist__.empty()
    }
}

//#endregion

//#region SongsPanel

class SongsPanel extends Panel {
    constructor() {
        super($(`<section class="songs container">
        <h3>Songs</h3>
        <ul></ul>
        <button type="submit" class="btn btn-light">Back</button>
    </section`));

    this.__$songsList__ = this.$container.find('ul');
    this.__$backButton__ = this.$container.find('button');
    }

    set songs(songs) {
        songs.forEach(({ id, name, preview_url }) => {
            const $item = $(`<li data-id=${id}><p>${name}</p><audio src="${preview_url}" controls></audio></li>`)

            // $item.click(() => {
            //     const id = $item.data('id')
            //     this.__onSongSelected__(id)
            // });

            this.__$songsList__.append($item)
        });
    }

    set onSongSelected(callback) {
        this.__onSongSelected__ = callback
    }

    clear() {
        this.__$songsList__.empty();
    }

    
    set onGoBack(callback) {
        this.__$backButton__.on('click', function(event){
            event.preventDefault();
            callback()  
        });
    }
}

//#endregion
