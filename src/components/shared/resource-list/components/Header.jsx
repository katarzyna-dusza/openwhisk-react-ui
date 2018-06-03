import React from 'react';

export const HeaderColumn = ({ col, name }) => (
    <div className={`header-list__column-name ${col}`}>{name}</div>
);

const Header = ({headerColumns}) => {
    let columns = headerColumns.map((h, index) =>
        <HeaderColumn key={index} col={h.col} name={h.name}/>
    );

    return (<div className='header-list row col-12'>{columns}</div>);
};

export default Header;