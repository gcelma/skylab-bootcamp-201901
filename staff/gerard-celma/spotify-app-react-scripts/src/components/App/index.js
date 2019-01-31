import React from 'react'
import './index.sass'

import logic from '../../logic/logic'
import Header from '../Header/index'
import LoginPanel from '../LoginPanel/index'
import RegisterPanel from '../RegisterPanel/index'
import SearchPanel from '../SearchPanel/index'
import ArtistsPanel from '../ArtistsPanel/index'
import AlbumsPanel from '../AlbumsPanel/index'
import SongsPanel from '../SongsPanel/index'

class App extends React.Component {
    state = {showLogin: true, showRegister: false, showSearch: false, showArtists: false, showAlbums: false, showSongs: false, artistsList: [], albumsList: [], songsList: [], loginFeedback: '', registerFeedback: '', searchFeedback: '', artistsFeedback: '', albumsFeedback: '' }

    title =  <h1>Spotify-app</h1>

    handleLogin = (email, password) => {
        try {
            logic.login(email,password, user => {
                this.setState({
                    showLogin: false,
                    showRegister: false,
                    showSearch: true
                })
            })
        } catch ({message}) {
            this.setState({ loginFeedback: message })
        }
    }

    handleGoToRegister = () => {
        this.setState({
            showLogin: false,
            showRegister: true,
            registerFeedback: ''
        })
    }
    
    handleRegister = (email, password, passwordConf) => {
        try {
            logic.register(email,password,passwordConf, user => {
                console.log(user)
            })
        } catch ({message}) {
            this.setState({ registerFeedback: message })
        }
    }
    
    handleGoToLogin = () => {
        this.setState({
            showLogin: true,
            showRegister: false,
            loginFeedback: ''
        })
    }
    
    handleSearch = (query) => {
        try {
            logic.searchArtists(query, (error, artists) => {
                if(error) this.setState({ searchFeedback: error.message})
                else {
                    this.setState({ artistsList: artists, showSearch: false, showArtists: true})
                }
            })
        } catch ({message}) {
            this.setState({ searchFeedback: message})
        }
    }

    handleArtistClick = (id) => {
        try{
            logic.retrieveAlbums(id, (error, albums) => {
                if(error) this.setState({ albumsFeedback: error.message })
                else {
                    this.setState({ albumsList: albums, showArtists: false, showAlbums: true })
                }
            })
        } catch ({ message }) {
            this.setState({ albumsFeedback: message})
        }
    }

    handleAlbumClick = (id) => {
        try {
            logic.retrieveSongs(id, (error, songs) => {
                if(error) console.log(error.message)
                else {
                    this.setState({ songsList: songs, showAlbums: false, showSongs: true})
                }
            })
        } catch ({ message }) {
            console.error(message)
        }
    }

    handleGoToSearch = () => {
        this.setState({ showSongs: false, showSearch:true })
    }

    render() {
        const {state:{showLogin,showRegister,showSearch,showArtists,showAlbums,showSongs,loginFeedback,registerFeedback,searchFeedback,artistsFeedback,albumsFeedback,artistsList,albumsList,songsList}, handleLogin, handleRegister,handleSearch, handleGoToLogin, handleGoToRegister, handleArtistClick, handleAlbumClick, handleGoToSearch} = this

        return <main>
        {<Header />}    
        {showLogin && <LoginPanel title = "Login" onLogin = {handleLogin} onGoToRegister = {handleGoToRegister} feedback={loginFeedback} /> }
        {showRegister && <RegisterPanel title = "Register" onRegister = {handleRegister} onGoToLogin = {handleGoToLogin} feedback={registerFeedback} />}
        {showSearch && <SearchPanel onSearch = {handleSearch} feedback= {searchFeedback} />}
        {showArtists && <ArtistsPanel artistsList = {artistsList} onArtistClick = {handleArtistClick} feedback= {artistsFeedback} />}
        {showAlbums && <AlbumsPanel albumsList = {albumsList} onAlbumClick = {handleAlbumClick} feedback= {albumsFeedback} />}
        {showSongs && <SongsPanel songsList = {songsList} onBackClick = {handleGoToSearch} />}
    </main>
    }
    
}

export default App