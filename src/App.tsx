import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button, { ButtonType, ButtonSize } from "components/Button/Button";

function App() {
    return (
        <div className="App">
            <Button
                onClick={() => {
                    console.log("click");
                }}
            >
                click
            </Button>
            <Button disabled>施锦科</Button>
            <Button buttonType={ButtonType.Primary}>施锦科</Button>
            <Button buttonType={ButtonType.Link}>施锦科</Button>
            <Button
                disabled
                buttonType={ButtonType.Primary}
                size={ButtonSize.Large}
            >
                dc disabled
            </Button>
            <Button
                autoFocus
                buttonType={ButtonType.Danger}
                size={ButtonSize.Small}
            >
                施锦科
            </Button>
        </div>
    );
}

export default App;
