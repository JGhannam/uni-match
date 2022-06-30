import React from "react"
import { auth } from "../firebase"
import "./stylings/login.css"
import match from "../Views/stylings/Images/cartoon-match.png"

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            password: '',
            email: '',
        }
    }

    handleSignIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            this.props.navigate('/');
        }
        )
        .catch(error => alert(error.message))
    }

    render(){
        return (
            <>
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSignIn} className="LoginForm" >
                    <input type="text" value={this.state.email} placeholder="Email" onChange={(e) => this.setState({email: e.target.value}) } />
                    <input type="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                    <button type="submit">Login</button>
                </form>     
            </div>
            <div>
                test
                <img src={match} alt="match" /> 
              </div>    
              </>
        )
    }
}