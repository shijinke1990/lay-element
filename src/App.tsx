import React from "react";
import "./App.css";

import Menu from "components/Menu/Menu";
import MenuItem from "components/Menu/MenuItem";

function App() {
    return (
        <div className="App">
            <Menu onSelect={(index) => console.log("from menu", index)}>
                <MenuItem>
                    <a href="#home">Home</a>
                </MenuItem>
                <MenuItem>
                    <a href="#features">Features</a>
                </MenuItem>
                <MenuItem>
                    <a href="#pricing">Pricing</a>
                </MenuItem>
                <MenuItem disabled={true}>
                    <a href="#contact">Contact</a>
                </MenuItem>
                <MenuItem>
                    <a href="#contact">起小点</a>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default App;
