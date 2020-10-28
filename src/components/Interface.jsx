import React, {useContext, useState} from 'react';
import DataContext from '../contexts/DataContext';
import OrderList from './OrderList';


function Interface() {
    const { vips, tables, balcony, setVips, setTables, setBalcony, activeTable, setActiveTable, activeTableOrderer, setActiveTableOrderer,
        activeTableOrderTime, setActiveTableOrderTime, activeTableSpotsQuantity, setActiveTableSpotsQuantity, activeTableType, setActiveTableType, activeTableID, setActiveTableID, 
        orderedList, setOrderedList} = useContext(DataContext);

    const handleOrdererNameChange = (event) => {
        setActiveTableOrderer(event.target.value);
    }

    const handleOrderTimeChange = (event) => {
        setActiveTableOrderTime(event.target.value);
    }

    const handleResetOrder = (event) => {
        event.preventDefault();
        let deleteindex = null;
        for (let i = 0; i < orderedList; i += 1) {
            if (orderedList[i].id === activeTableID) {
                deleteindex = i;
            }
        }
        setOrderedList(prevState => (prevState.splice(deleteindex, 1)));
        if (activeTableType === 'table') {
            setTables(prevState => ({...prevState, ...prevState[activeTable].orderer = ''}));
            setTables(prevState => ({...prevState, ...prevState[activeTable].ordered = false}));
        } else if (activeTableType === 'vip') {
            setVips(prevState => ({...prevState, ...prevState[activeTable].orderer = ''}));
            setVips(prevState => ({...prevState, ...prevState[activeTable].ordered = false}));
        } else if (activeTableType === 'balcony') {
            setBalcony(prevState => ({...prevState, ...prevState[activeTable].orderer = ''}));
            setBalcony(prevState => ({...prevState, ...prevState[activeTable].ordered = false}));
        }

    }

    // const handleOrdererNameSubmit = (event) => {
    //     event.preventDefault();
    //     if (activeTableType === 'table') {
    //         setTables(prevState => ({...prevState, ...prevState[activeTable].orderer = activeTableOrderer}));
    //     } else if (activeTableType === 'vip') {
    //         setVips(prevState => ({...prevState, ...prevState[activeTable].orderer = activeTableOrderer}));
    //     } else if (activeTableType === 'balcony') {
    //         setBalcony(prevState => ({...prevState, ...prevState[activeTable].orderer = activeTableOrderer}));
    //     }
    //     orderedList.push({type: activeTableType, table: activeTable, id: activeTableID, time: activeTableOrderTime});
    //     console.log(orderedList);
    // }
    

    // const handleOrderTimeSubmit = (event) => {
    //     event.preventDefault();
    //     if (activeTableType === 'table') {
    //         setTables(prevState => ({...prevState, ...prevState[activeTable].ordered = activeTableOrderTime}));
    //     } else if (activeTableType === 'vip') {
    //         setVips(prevState => ({...prevState, ...prevState[activeTable].ordered = activeTableOrderTime}));
    //     } else if (activeTableType === 'balcony') {
    //         setBalcony(prevState => ({...prevState, ...prevState[activeTable].ordered = activeTableOrderTime}));
    //     }
    // }

    const handleOrderFormSubmit = (event) => {
        event.preventDefault();
        if (activeTableType === 'table') {
            setTables(prevState => ({...prevState, ...prevState[activeTable].orderer = activeTableOrderer}));
            setTables(prevState => ({...prevState, ...prevState[activeTable].ordered = activeTableOrderTime}));
        } else if (activeTableType === 'vip') {
            setVips(prevState => ({...prevState, ...prevState[activeTable].orderer = activeTableOrderer}));
            setVips(prevState => ({...prevState, ...prevState[activeTable].ordered = activeTableOrderTime}));
        } else if (activeTableType === 'balcony') {
            setBalcony(prevState => ({...prevState, ...prevState[activeTable].orderer = activeTableOrderer}));
            setBalcony(prevState => ({...prevState, ...prevState[activeTable].ordered = activeTableOrderTime}));
        }
        setOrderedList(prevState => ([...prevState, {type: activeTableType, table: activeTable, id: activeTableID, time: activeTableOrderTime}]));
        console.log(orderedList);
    }



    return (
        <div className={activeTable ? "interface_wrapper" : "interface_wrapper invisible"}>
            <div className="active_table_info">
                <span className="int_active_tbl_name">Выбран стол: {activeTable}</span>
                <div className="active_table_order_wrapper">
                    <span className="active_table_orderer">Фамилия заказчика: {activeTableOrderer ? activeTableOrderer : 'Стол не заказан'}</span>
                    <span className="active_table_order_time">Время заказ стола: {activeTableOrderTime}</span>
                    <form onSubmit={handleOrderFormSubmit}>
                        <input type="text" onChange={handleOrdererNameChange} value={activeTableOrderer ? activeTableOrderer : ''}></input>
                        <input type="time" onChange={handleOrderTimeChange} value={activeTableOrderTime ? activeTableOrderTime : '00:00'}></input>
                        <button type="submit">Сохранить</button>
                        {activeTableOrderer && <button type="button" onClick={handleResetOrder}>Отменить бронь</button>}
                    </form>
                    <span className="active_table_occupied">Статус стола: {activeTableOrderTime}</span>
                        <button type="button">Занят</button>
                        <button type="button">Свободен</button>                 
                </div>
            </div>
        </div>
    );
}

export default Interface;