import React from 'react'
import './index.sass'

class ArtistsPanel extends React.Component {
    retrieveAlbums = (id) => {
        const { props:{ onArtistClick }} = this

        onArtistClick(id)
}

    render() {
        const { props: {artistsList}, retrieveAlbums } = this

        return <section className="results container">
        <h3>Artists</h3>
        <ul>
            {artistsList.map(({id,name}) => {
                return <li data-id={id} onClick={() => retrieveAlbums(id)}>{name}</li>
            })}
        </ul>
</section>

    }
}

export default ArtistsPanel