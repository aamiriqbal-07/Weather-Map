import React from 'react';
import ReactDOM from 'react-dom';
import Conditions from './../Conditions';
import { render,cleanup,getByTestId } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


afterEach(cleanup);

it ("renders without crashing", () => {
    var responseObj={message:"Just Basic Testing", cod:300};
    var error = true;
    const div = document.createElement("div");
    ReactDOM.render(
        <Conditions error responseObj></Conditions>,div);
})

// it ("renders without crashing", () => {
//     var responseObj={message:"city not found", cod:200};
//     var error = false;
//     const div = document.createElement("div");
//     ReactDOM.render(
//         <Conditions error responseObj></Conditions>,div);
// })

// it ("renders without crashing", () => {
//     var responseObj={message:"city not found", cod:200};
//     var error = false;
//     const div = document.createElement("div");
//     ReactDOM.render(
//         <Conditions error responseObj></Conditions>,div);
// })

// it ("renders without crashing", () => {
//     var responseObj={message:"city not found", cod:200};
//     var error = true;
//     const div = document.createElement("div");
//     ReactDOM.render(
//         <Conditions error responseObj></Conditions>,div);
// })

it("checks for port", () => {
    var responseObj={message:"Just Basic Testing", cod:300};
    const {getByTestId} = render(<Conditions responseObj={"Just Basic Testing", 300}></Conditions>);
    expect(getByTestId('test')).toHaveTextContent(responseObj.message);
})