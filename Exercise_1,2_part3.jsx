import * as React from "react";
import * as ReactDOM from "react-dom";
import MyButton from "./MyButton";
import MyList from "./MyList";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appState = {
    text: "My Button",
    disabled: true,
    items: ["First", "Second", "Third"],
};
function 