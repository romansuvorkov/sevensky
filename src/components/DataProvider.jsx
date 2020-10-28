import React, {useState} from 'react';
import DataContext from '../contexts/DataContext';
import tableCreator from '../functions/tableCreator';

export default function DataProvider(props) {
    
    let vipsRaw = null;
    let tablesRaw = null;
    let balconyRaw = null;
    // let orderedList = [];
    const [orderedList, setOrderedList] = useState([]);

    // const testJson = JSON.stringify({test: 1231231});
    // localStorage.setItem('vips', testJson);
    // localStorage.clear();

    if (localStorage.vips !== undefined) {
        vipsRaw = JSON.parse(localStorage.vips);
    } else {
        vipsRaw = tableCreator('vip', 6);
    }

    if (localStorage.tables !== undefined) {
        tablesRaw = JSON.parse(localStorage.tables);
    } else {
        tablesRaw = tableCreator('table', 26);
    }

    if (localStorage.balcony !== undefined) {
        balconyRaw = JSON.parse(localStorage.balcony);
    } else {
        balconyRaw = tableCreator('balcony', 16);
    }

    if (localStorage.orderedList !== undefined) {
        orderedList = JSON.parse(localStorage.balcony);
    }

    const [vips, setVips] = useState(vipsRaw);
    const [tables, setTables] = useState(tablesRaw);
    const [balcony, setBalcony] = useState(balconyRaw);

    const [activeTable, setActiveTable] = useState(null);
    // const [activeTableOrder, setActiveTableOrder] = useState(null);
    const [activeTableOrderer, setActiveTableOrderer] = useState(null);
    const [activeTableOrderTime, setActiveTableOrderTime] = useState(null);
    const [activeTableSpotsQuantity, setActiveTableSpotsQuantity] = useState(null);
    const [activeTableType, setActiveTableType] = useState(null);
    const [activeTableStatus, setActiveTableStatus] = useState(false);
    const [activeTableID, setActiveTableID] = useState(null);

    // console.log(vips);
    // console.log(tables);
    // console.log(balcony);

    // const testJson = JSON.stringify(test);
    // localStorage.setItem('vips', testJson);
    // localStorage.clear();

    // const vips = tableCreator('vip', 6);
    // const tables = tableCreator('table', 26);
    // const balcony = tableCreator('balcony', 16);
    // const spots = {...vips, ...tables, ...balcony};

    return (
        <DataContext.Provider value={{vips, tables, balcony, setVips, setTables, setBalcony,
        activeTable, setActiveTable, activeTableOrderer, setActiveTableOrderer,
        activeTableOrderTime, setActiveTableOrderTime, activeTableSpotsQuantity, setActiveTableSpotsQuantity, activeTableType, setActiveTableType,
        activeTableStatus, setActiveTableStatus, orderedList, setOrderedList, activeTableID, setActiveTableID
        }}>
            {props.children}
        </DataContext.Provider>
    )
}