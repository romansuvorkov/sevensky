import React, {useContext} from 'react';
import DataContext from '../contexts/DataContext';

function Interface() {
    const { tables, vips, setTables } = useContext(DataContext);
    // console.log(tables);

    return (
        <div className="interface_wrapper">
            <span className="active_table">Выбран стол</span>
            <span className="active_table_order">Выбран стол</span>
            <span className="active_table_occupied">Выбран стол</span>
        </div>
    );
}

export default Interface;