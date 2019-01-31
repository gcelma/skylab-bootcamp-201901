import React from 'react'
import './index.sass'
import Feedback from '../Feedback/index'

class RegisterPanel extends React.Component {
    state = {email: '', password: '', passwordConf: ''}

    handleEmailInput = event => this.setState({ email: event.target.value })
    handlePasswordInput = event => this.setState({ password: event.target.value })
    handlePasswordConfInput = event => this.setState({ passwordConf: event.target.value })

    handleFormRegister = event => {
        event.preventDefault()

        const { state: {email, password, passwordConf}, props: {onRegister} } = this

        onRegister(email, password, passwordConf)
    }
        

    render() {
        const { handleFormRegister, handleEmailInput, handlePasswordInput, handlePasswordConfInput, props:{title, onGoToLogin, feedback}} = this

        return <section className="register container">
        <h2>{title}</h2>
        <form onSubmit = {handleFormRegister}>
            <input type = "email" name = "email" onChange = {handleEmailInput} className="form-control" required />
            <input type = "password" name = "password" onChange = {handlePasswordInput} className="form-control" required />
            <input type = "passwordConf" name = "passwordConf" onChange = {handlePasswordConfInput} className="form-control" required />
            <button className="btn btn-light">Register</button>
        </form>
        {feedback && <Feedback message={feedback} level="warn" />}
        <button onClick = {onGoToLogin}>Login</button>
    </section>
    }
}

export default RegisterPanel