import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import './styles.css';

export default function App() {
    return(
        <Router>
            <div>
                <nav> 
                    <ul className="items">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/*
                A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */
                }

                <Switch>
                    <Route path="/about">
                        <About title="About"/>
                    </Route>
                    <Route path="/users">
                        <Users title="Users"/>
                    </Route>
                    <Route path="/">
                        <Home title="Home"/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}