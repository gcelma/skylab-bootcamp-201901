import React from 'react'
import './index.sass'

class AlbumsPanel extends React.Component {
    retrieveSongs = (id) => {
        const { props: { onAlbumClick }} = this

        onAlbumClick(id)
    }

    render() {
    const { props: {albumsList}, retrieveSongs} = this

        return <section className="albums container">
        <h3>Albums</h3>
        <ul>
            {albumsList.map(({id,name}) => {
                return <li data-id={id} onClick = {() => retrieveSongs(id)}>{name}</li>
            })}
        </ul>
    </section>

    }
}

export default AlbumsPanel