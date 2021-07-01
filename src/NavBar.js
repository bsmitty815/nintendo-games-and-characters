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
                    <button>Characters</button>
                </span>
            </NavLink>
            <NavLink to="/GameTitle">
                <span>
                    <button>Games</button>
                </span>
            </NavLink>
            <NavLink to="/Form">
                <span>
                    <button>Form</button>
                </span>
            </NavLink>
        </div>
    )

}

export default NavBar