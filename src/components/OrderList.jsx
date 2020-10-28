import React, {useContext} from 'react';
import OrderListItem from './OrderListItem'
import DataContext from '../contexts/DataContext';

function OrderList() {

    const { orderedList } = useContext(DataContext);

    return (
        <div className="order_list_wrapper">
            {orderedList !== [] && <div className="order_list_interface">
                {orderedList.map(o => <OrderListItem {...o} key={o.id} />)}
            </div>}            
        </div>
    );
}

export default OrderList;