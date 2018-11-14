import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
    <ul class="navbar-nav mr-auto">

        <li class="nav-item">
            <Link to="/" className="nav-link">About</Link>
        </li>

        <li class="nav-item">
            <Link to="/tasks" className="nav-link">Task List</Link>
        </li>

        <li class="nav-item">
            <Link to="/chat" className="nav-link">Team Chat</Link>
        </li>

        <li class="nav-item">
            <Link to="/repair" className="nav-link">Repair Guide</Link>
        </li>

    </ul>
)

export default NavTabs;