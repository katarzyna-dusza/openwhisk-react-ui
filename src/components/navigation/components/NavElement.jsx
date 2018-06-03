import React from 'react';
import { Link } from 'react-router-dom';

const NavElement = ({ links, name, current }) => {
    const linksToDisplay = links.map((l, index) => {
        return (
            <Link to={l.link} className={current === l.link ? 'section__elem section__elem--active' : 'section__elem'} key={index}>
                <i className='icon material-icons'>{l.icon}</i>
                {l.name}
            </Link>
        );
    });

    return (
        <div className='top-nav__section'>
            <div className='header'>{name}</div>
            <div className='section'>
                {linksToDisplay}
            </div>
        </div>
    );
};

export default NavElement;