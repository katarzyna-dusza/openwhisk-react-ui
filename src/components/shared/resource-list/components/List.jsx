import React from 'react';
import Header from './Header.jsx';

const List = ({ headerColumns, entryColumns }) => (
    <div>
        <Header headerColumns={headerColumns}/>
        {entryColumns}
    </div>
);

export default List;