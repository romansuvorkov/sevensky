import React, {useContext} from 'react';
import Spot from './Spot'
import DataContext from '../contexts/DataContext';

function FirstFloor() {

    const { tables, vips } = useContext(DataContext);

    return (
        <div className="first_floor">
            <div className="left_side_wrapper">
                <Spot data={vips.vip2} />
                <div className="line1">
                    <Spot data={tables.table4} />   
                    <Spot data={tables.table3} />   
                    <Spot data={tables.table2} />   
                    <Spot data={tables.table1} />                       
                </div>
                <div className="line2">
                    <Spot data={tables.table16} />                       
                    <Spot data={tables.table15} />   
                    <Spot data={tables.table14} />   
                    <Spot data={tables.table13} />   
                    <Spot data={tables.table12} /> 
                </div>
                <div className="line3">
                    <Spot data={tables.table5} />  
                    <Spot data={tables.table6} />  
                    <Spot data={tables.table7} />                       
                    <Spot data={tables.table8} />   
                    <Spot data={tables.table9} />   
                    <Spot data={tables.table10} />   
                    <Spot data={tables.table11} /> 
                </div>
            </div>



            
        </div>
    );
}

export default FirstFloor;