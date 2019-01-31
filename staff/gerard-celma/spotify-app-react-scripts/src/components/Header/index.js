import React from 'react'
import './index.sass'
import spotify_Logo from '../../img/Spotify_Logo.png'

function Header() {
    return <header className="text-center">
    <a href="https://www.google.com"><img src={spotify_Logo} alt="Spotify logo" /></a>
</header>
}

export default Header