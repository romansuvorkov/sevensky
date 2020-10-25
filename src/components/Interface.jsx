import React, {useContext, useState} from 'react';
import DataContext from '../contexts/DataContext';


function Interface() {
    const { tables, vips, setTables, activeTable, setActiveTable, activeTableOrderer, setActiveTableOrderer,
        activeTableOrderTime, setActiveTableOrderTime, activeTableSpotsQuantity, setActiveTableSpotsQuantity } = useContext(DataContext);

    const [ordererNameValue, setOrdererNameValue] = useState('');
    const [orderTimeValue, setOrderTimeValue] = useState('');
    





    const handleOrdererNameChange = (event) => {
        setActiveTableOrderer(event.target.value);
    }

    const handleOrderTimeChange = (event) => {
        setOrderTimeValue(event.target.value);
    }

    const handleOrdererNameSubmit = (event) => {
        event.preventDefault();
        const target = event.target;
        console.log(ordererNameValue);
        console.log(orderTimeValue);
        setOrdererNameValue('');
    }

    const handleOrderTimeSubmit = (event) => {
        event.preventDefault();
        console.log(orderTimeValue);
    }



    return (
        <div className="interface_wrapper">
            <div className="active_table_info">
                <span className="active_table">Выбран стол: {activeTable}</span>
                <div className="active_table_order_wrapper">
                    <span className="active_table_orderer">Фамилия заказчика: {activeTableOrderer ? activeTableOrderer : 'Стол не заказан'}</span>
                    <form onSubmit={handleOrdererNameSubmit}>
                    <input type="text" onChange={handleOrdererNameChange} value={activeTableOrderer ? activeTableOrderer : 'Введите имя заказчика'}></input>
                        <button type="submit">Сохранить</button>
                        <button type="reset">Отменить</button>
                    </form>
                    <span className="active_table_order_time">Время заказ стола: {activeTableOrderTime}</span>
                    <form onSubmit={handleOrderTimeSubmit}>
                        <input type="time" onChange={handleOrderTimeChange} value={orderTimeValue ? orderTimeValue : '19:53'}></input>
                        <button type="submit">Сохранить</button>
                        <button type="reset">Отменить</button>
                    </form>
                    <span className="active_table_occupied">Статус стола: {activeTableOrderTime}</span>
                    <form>
                        <button type="submit">Занят</button>
                        <button type="submit">Свободен</button>
                    </form>                   
                </div>
                <span className="active_table_orderer">Фамилия заказчика: {activeTableOrderer}</span>
                <span className="active_table_order_time">Время заказ стола: {activeTableOrderTime}</span>
            </div>
        </div>
    );
}

export default Interface;