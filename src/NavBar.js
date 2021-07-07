import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    //styling buttons
    //style
    // exact active style

    return (
        <div id="navBar">

            <NavLink to="/Characters">
                <span>
                    <button className="myNavButton">Characters</button>
                </span>
            </NavLink>
            <NavLink to="/GameTitle">
                <span>
                    <button className="myNavButton">Games</button>
                </span>
            </NavLink>
            <NavLink to="/Form">
                <span>
                    <button className="myNavButton">Add Character</button>
                </span>
            </NavLink>
        </div>
    )

}

export default NavBar