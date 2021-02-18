import React from 'react';
import {Link} from "react-router-dom";

export const Header = () =>{
    return(
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to={'/'}>Home page</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={'/episodes'}>Episodes</Link></li>
                        <li><Link to={'/locations'}>Locations</Link></li>
                        <li><Link to={'/characters'}>Characters</Link></li>
                        <li><Link to={'/myWatchList'}>My Watch List</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
