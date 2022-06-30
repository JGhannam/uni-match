import React from 'react'
import { auth, db } from '../firebase'
import './stylings/login.css'

export default class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }

    handleSignIn = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            auth.currentUser.updateProfile({
                displayName: this.state.username,
            });
            db.collection('users').doc(user.user.uid).set({
                username: this.state.username,
                email: this.state.email,
            })
            this.props.history.push('/')
        }
        )
        .catch(error => alert(error.message))
    }

    render(){
        return (
            <>
                <div>
                    <h1>Register</h1>
                    <form onSubmit={this.handleSignIn} className="LoginForm">
                        <label>Username:</label>
                        <input type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
                        <label>Email:</label>
                        <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                        <label>Password:</label>
                        <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                        <button type="submit">Register</button>
                    </form>

                </div>
            </>
        )
    }
}