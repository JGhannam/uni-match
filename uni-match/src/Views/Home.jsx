import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }
    
    render() {
        return (
        <>
            <div>
                {
                    this.state.user ?
                    <>
                        <h1>{auth?.currentUser?.displayName}</h1>
                        <h1>{auth?.currentUser?.email}</h1>
                        <button onClick={() => {
                            auth.signOut()
                            .then(() => {
                                this.setState({ user: null });
                            }
                            )
                        }}>Sign Out</button>
                    </>
                    :
                    <>
                    <Link to="/login">Login</Link>
                    <br/>
                    <Link to="/register">Register</Link>
                    </>
                }
            </div>
        </>
        );
    }
}