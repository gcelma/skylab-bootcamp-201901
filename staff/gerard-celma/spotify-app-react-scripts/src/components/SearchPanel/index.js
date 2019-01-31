import React from 'react'
import './index.sass'
import Feedback from '../Feedback/index'
class SearchPanel extends React.Component {
    state = {query: ''}

    handleSearchInput = event => this.setState( {query: event.target.value})

    handleFormSearch = event => {
        event.preventDefault()

        const { state:{query}, props:{onSearch} } = this

        onSearch(query)
    }


    render() {
        const { handleFormSearch, handleSearchInput, props:{feedback} } = this

        return <section className="search container">
        <h2>Search</h2>
        <form onSubmit = {handleFormSearch}>
            <input type="text" name="query" placeholder="Search an artist..." className="form-control" onChange = {handleSearchInput} required />
            <button type="submit" className="btn btn-light">Search</button>
        </form>
        {feedback && <Feedback message={feedback} level="warn" />}
    </section> 
    }
}

export default SearchPanel