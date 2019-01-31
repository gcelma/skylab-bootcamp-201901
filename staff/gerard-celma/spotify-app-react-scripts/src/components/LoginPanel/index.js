import React from 'react'
import './index.sass'
import Feedback from '../Feedback/index'

class LoginPanel extends React.Component {
    state = { email: '', password: ''}
    
    handleEmailInput = event => this.setState({ email: event.target.value })
    handlePasswordInput = event => this.setState({ password: event.target.value })

    handleFormSubmit = event => {
        event.preventDefault()

        const { state: {email, password }, props: { onLogin } } = this

        onLogin(email, password)
    }

    render() {
        const { handleFormSubmit, handleEmailInput, handlePasswordInput, props: {title, onGoToRegister, feedback} } = this

        return <section className="login container">
        <h2>{title}</h2>
        <form onSubmit = {handleFormSubmit}>
            <input type = "text" name = "email" onChange = {handleEmailInput} className="form-control" />
            <input type = "password" name = "password" onChange = {handlePasswordInput} className="form-control" />
            <button className="btn btn-light">Login</button>
        </form>
        {feedback && <Feedback message={feedback} level="warn" />}
        <button onClick = {onGoToRegister} className="btn btn-light">Register</button>
    </section>
    }
}

export default LoginPanel