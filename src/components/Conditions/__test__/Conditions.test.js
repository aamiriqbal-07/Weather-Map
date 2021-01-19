import React from 'react';
import ReactDOM from 'react-dom';
import Conditions from './../Conditions';


it ("renders without crashing", () => {
    var responseObj={message:"Just Basic Testing", cod:300};
    var error = true;
    const div = document.createElement("div");
    ReactDOM.render(
        <Conditions error responseObj></Conditions>,div);
})