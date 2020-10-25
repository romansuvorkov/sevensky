import React, {useContext, useState} from 'react';
import DataContext from '../contexts/DataContext';


function Interface() {
    const { vips, tables, balcony, setVips, setTables, setBalcony, activeTable, setActiveTable, activeTableOrderer, setActiveTableOrderer,
        activeTableOrderTime, setActiveTableOrderTime, activeTableSpotsQuantity, setActiveTableSpotsQuantity, activeTableType, setActiveTableType } = useContext(DataContext);

    const handleOrdererNameChange = (event) => {
        setActiveTableOrderer(event.target.value);
    }

    const handleOrderTimeChange = (event) => {
        setActiveTableOrderTime(event.target.value);
    }

    const handleOrdererNameSubmit = (event) => {
        event.preventDefault();
        const target = event.target;
        if (activeTableType === 'table') {
            setTables(prevState => ({...prevState, ...prevState[activeTable].orderer = activeTableOrderer}));
        } else if (activeTableType === 'vip') {
            setVips(prevState => ({...prevState, ...prevState[activeTable].orderer = activeTableOrderer}));
        } else if (activeTableType === 'balcony') {
            setBalcony(prevState => ({...prevState, ...prevState[activeTable].orderer = activeTableOrderer}));
        }
    }

    const handleOrderTimeSubmit = (event) => {
        event.preventDefault();
        if (activeTableType === 'table') {
            setTables(prevState => ({...prevState, ...prevState[activeTable].ordered = activeTableOrderTime}));
        } else if (activeTableType === 'vip') {
            setVips(prevState => ({...prevState, ...prevState[activeTable].ordered = activeTableOrderTime}));
        } else if (activeTableType === 'balcony') {
            setBalcony(prevState => ({...prevState, ...prevState[activeTable].ordered = activeTableOrderTime}));
        }
    }



    return (
        <div className="interface_wrapper">
            <div className="active_table_info">
                <span className="active_table">Выбран стол: {activeTable}</span>
                <div className="active_table_order_wrapper">
                    <span className="active_table_orderer">Фамилия заказчика: {activeTableOrderer ? activeTableOrderer : 'Стол не заказан'}</span>
                    <form onSubmit={handleOrdererNameSubmit}>
                    <input type="text" onChange={handleOrdererNameChange} value={activeTableOrderer ? activeTableOrderer : ''}></input>
                        <button type="submit">Сохранить</button>
                        <button type="reset">Отменить</button>
                    </form>
                    <span className="active_table_order_time">Время заказ стола: {activeTableOrderTime}</span>
                    <form onSubmit={handleOrderTimeSubmit}>
                        <input type="time" onChange={handleOrderTimeChange} value={activeTableOrderTime ? activeTableOrderTime : '00:00'}></input>
                        <button type="submit">Сохранить</button>
                        <button type="reset">Отменить</button>
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