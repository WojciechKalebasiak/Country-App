import React from 'react';
import { Link } from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
const Navigation = props => (
    <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>Countries.js</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/countries">Countries</Link></li>
                    <li className="nav-item"><Link  className="nav-link"to="/continents">Countinents</Link></li>
                    <li className="nav-item"><Link className="nav-link"to="/contact">Countact</Link></li>
                </ul>
            </div>
        </nav>
        <div className='container-fluid'>
            {props.children}
        </div>
    </div >
);
export default Navigation;