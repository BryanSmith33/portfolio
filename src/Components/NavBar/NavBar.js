import React, { Component } from 'react';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';
import { updateFontFamily } from '../../helpers/updateFontFamily';

class NavBar extends Component {
    componentDidMount() {
        const id = document.querySelector('.my-name');
        updateFontFamily(id);
    }
    render() {
        let pages = ['home', 'about', 'work', 'contact'];
        return (
            <div className='navigation'>
                <span className='my-name'><Link to='/'>bryan smith</Link></span>
                <ul className='pages'>
                    {pages.map(page => {
                        return (
                            <li key={page}>
                                <NavLink activeClassName='active' to={'/' + page} >
                                    {page}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default NavBar;