"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

function timeNow() {

    let a = new Date();

    return `${a.getHours()} : ${a.getMinutes()} : ${a.getSeconds()}`;

}


class Name extends React.Component
{

    render()
    {
        return <div onClick={()=>{alert(timeNow());}}>
            <h1>Владимир</h1>
            <p>Кольберт</p>
        </div>;
    }
}

let nameItem = document.querySelectorAll('.name');

for (let index = 0; index<= nameItem.length; index++) {

    ReactDOM.render(<Name/>, nameItem[index]);
}

