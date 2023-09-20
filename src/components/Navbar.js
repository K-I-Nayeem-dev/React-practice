import React from 'react';

import PropTypes from 'prop-types';


function Navbar(props) {

    // const [color, setColor] = useState('light');

    // const bg_color = ()=>{
    //     if(color === 'light'){
    //         setColor(document.getElementById('bgc_color').value)
    //     }
    //     else{
    //         setColor()
    //     }

    // }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">{props.links}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">{props.about}</a>
                </li>
            </ul>
            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">{props.search}</button>
            </form> */}
            <div className='me-3 d-flex align-items-center'>
                <input className='me-2'  type="color" name="" id="bgc_color" />
                <label style={{ color: props.mode === 'light' ? 'black' : 'white' }}  htmlFor="#">Custom Dark Mode</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" style={{ color: props.mode === 'light' ? 'black' : 'white' }} htmlFor="flexSwitchCheckDefault">{props.darkText}</label>
            </div>
            </div>
        </div>
        </nav>
        </div>
    )
}

export default Navbar;

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    home : PropTypes.string,
    links : PropTypes.string,
    about : PropTypes.string,
    search : PropTypes.string,
};

Navbar.defaultProps = {
    title: 'set Title name',
    home: 'set Home',
    links: 'set links',
    about: 'set about',
    search: 'set search',
}
