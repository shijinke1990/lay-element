import React from "react";
import "./App.css";

import Menu from "components/Menu/Menu";
import MenuItem from "components/Menu/MenuItem";
import SubMenu from "components/Menu/SubMenu";

function App() {
    return (
        <div className="App">
            <Menu mode="horizontal">
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
                <SubMenu title="shitReact">
                    <MenuItem>
                        <a href="#996">996</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#007">007</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#qxd">HHH</a>
                    </MenuItem>
                </SubMenu>
                <MenuItem>
                    <a href="#contact">起小点2</a>
                </MenuItem>
            </Menu>
            <Menu mode="vertical" defaultOpenSubMenus={["6", "7"]}>
                <MenuItem>
                    <a href="#home">Home</a>
                </MenuItem>
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

                <SubMenu title="shitReact">
                    <MenuItem>
                        <a href="#996">996</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#007">007</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#qxd">HHH</a>
                    </MenuItem>
                </SubMenu>
                <MenuItem>
                    <a href="#contact">起小点2</a>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default App;
