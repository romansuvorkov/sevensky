import React, {useContext, useState} from 'react';
import DataContext from '../contexts/DataContext';

function Spot(props) {
    const { vips, tables, balcony, setVips, setTables, setBalcony, activeTable, setActiveTable, activeTableOrderer, setActiveTableOrderer,
        activeTableOrderTime, setActiveTableOrderTime, activeTableSpotsQuantity, setActiveTableSpotsQuantity, activeTableType, setActiveTableType, activeTableID, setActiveTableID } = useContext(DataContext);
    const { occupied, ordered, name, type, orderer, spotQuantity, id  } = props.data;
    // console.log(tables);
    // console.log(occupied);
    // console.log(ordered);
    // console.log(name);
    // console.log(type);

    const handleClick = () => {

        if (type === 'table') {
            setTables(prevState => ({...prevState, ...prevState[name].active = true}));
        } else if (type === 'vip') {
            setVips(prevState => ({...prevState, ...prevState[name].active = true}));
        } else if (type === 'balcony') {
            setBalcony(prevState => ({...prevState, ...prevState[name].active = true}));
        }
        setActiveTable(name);
        setActiveTableOrderer(orderer);
        setActiveTableOrderTime(ordered);
        setActiveTableSpotsQuantity(spotQuantity);
        setActiveTableType(type);
        setActiveTableID(id);




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
        <div className={activeTable === name ? "table_item active_table" : "table_item"} onClick={() => handleClick()}>
            <span>{name}</span>
            <span>Мест:{spotQuantity}</span>
            <span>{ordered}</span>
        </div>
    );
}

export default Spot;