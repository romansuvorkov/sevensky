import React, {useContext, useState} from 'react';
import DataContext from '../contexts/DataContext';

function Spot(props) {
    const { tables, vips, setTables, activeTable, setActiveTable, activeTableOrderer, setActiveTableOrderer,
        activeTableOrderTime, setActiveTableOrderTime, activeTableSpotsQuantity, setActiveTableSpotsQuantity } = useContext(DataContext);
    const { occupied, ordered, name, type, active, orderer,  } = props.data;
    // console.log(tables);
    // console.log(occupied);
    // console.log(ordered);
    // console.log(name);
    // console.log(type);

    const handleClick = () => {

        setTables(prevState => ({...prevState, ...prevState[name].active = true
        }));

        setActiveTable(type);
        setActiveTableOrderer(orderer);
        setActiveTableOrderTime(ordered);
        setActiveTableSpotsQuantity();



        




        // console.log(occupied);
        // if (occupied) {
        //     setTables(prevState => ({...prevState, [name]: {
        //         occupied: false,
        //         ordered: ordered,
        //         name: name,
        //         type: type} }));
        // } else {
        //     console.log('tables');
        //     setTables(prevState => ({...prevState, [name]: {
        //         occupied: true,
        //         ordered: ordered,
        //         name: name,
        //         type: type} }));            
        // }
        // tables[name].occupied = true;

        // console.log(tables);
    }
    
    return (
        <div className={active ? "table_item test" : "table_item"} onClick={() => handleClick()}>
            <span>{name}</span>
        </div>
    );
}

export default Spot;