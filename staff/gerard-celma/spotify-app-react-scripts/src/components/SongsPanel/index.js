import React from 'react'
import './index.sass'

class SongsPanel extends React.Component {
    backButtonClick = () => {
    const { props: { onBackClick } } = this

        onBackClick()
    }

    render() {
        const { props: {songsList}, backButtonClick} = this

        return <section className="songs container">
        <h3>Songs</h3>
        <ul>
            {songsList.map(({id,name,preview_url}) => {
                return <li data-id={id}><p>{name} <i class="far fa-star"></i></p><audio src={preview_url} controls></audio></li>
            })}
        </ul>
        <button type="submit" className="btn btn-light" onClick = {() => backButtonClick()}  >Back</button>
    </section>
    }
}

export default SongsPanel