import React from "react";
import "./nav.scss";
import "./nav.scss";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function Navegation(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="header__wrapper navbar-brand">
                <img className="logo header__logo" src="logo.png" alt="Logo of the store" />
            </div>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav header__nav-list">
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <Link to="/" className="header__nav-button btn">Home</Link>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <Link to="/products" className="header__nav-button btn">Products</Link>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <Link to="/contact" className="header__nav-button btn">Contact</Link>
                    </li>
                </ul>
                {props.location.pathname === '/products' && 
                    <form className="filter" onSubmit={event => event.preventDefault()}>
                        <input className="typeFilter" type="text" onChange={event => props.nameFilter(event)} placeholder="Search for names.." title="Type in a name" />
                        
                        <select className="selFilter" onChange={e => props.dropboxChange(e)}>
                            <option value= "disabled">Select Category</option>
                            <option value="All">All</option>
                            <option value="processor">Processor</option>
                            <option value="watch">Watch</option>
                            <option value="play console">Play Console</option>
                            <option value="tv">tv</option>
                            <option value="speakers">Speakers</option>
                            <option value="drone">Drone</option>
                            <option value="phone">Phone</option>
                            <option value="alarm">Smart Alarm</option>
                            <option value="computer">Computer</option>
                            <option value="headphone">EarBuds</option>
                            <option value="camera">Camera</option>
                            <option value="iPad">iPad</option>
                            <option value="lessthan400">Less than 400</option>
                            <option value="morethan400">More than $400</option>
                        </select>
                    </form>
                }
            </div>
        </nav>

    );
}

export default withRouter(Navegation);