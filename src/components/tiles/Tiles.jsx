import React from 'react';
import { Link } from 'react-router-dom';
import tiles from './tiles-data';

const Tiles = () => {
    let allTiles = tiles.map((t, index) => {
        return (
            <div key={index} className='col-4'>
                <Link to={t.link} className={`tile tile--${t.color}`}>
                    <div className={`tile__content tile__content--${t.color}`}>
                        <i className='icon material-icons col-12'>{t.icon}</i>
                        <div className='title'>{t.title}</div>
                        <div className='description'>{t.description}</div>
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <div className='resource col-12'>
            <div className='tile-wrapper row'>{allTiles}</div>
        </div>
    );
};

export default Tiles;