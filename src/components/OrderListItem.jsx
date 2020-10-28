import React, {useContext} from 'react';
import DataContext from '../contexts/DataContext';

function OrderListItem(props) {

    // const { orderedList } = useContext(DataContext);
    const { type, table, id, time  } = props;
    

    return (
        <div className="order_list_item">
            <span>{type}</span>
            
        </div>
    );
}

export default OrderListItem;