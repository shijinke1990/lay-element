import React, { Children, createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./MenuItem";
import "./Menu.scss";

type MenuMode = "horizontal" | "vertical";

type MenuProps = {
    mode?: MenuMode;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onSelect: (index: number) => void;
    defaultIndex?: number;
};

type MenuContextProps = {
    activeIndex?: number;
    onItemClick?: (index: number) => void;
};

export const MenuContext = createContext<MenuContextProps>({
    activeIndex: 0,
});

const Menu: React.FC<MenuProps> = ({ mode, children, className, style, onSelect, defaultIndex }) => {
    const [active, setActive] = useState(defaultIndex);
    const MenuContextValue: MenuContextProps = {
        activeIndex: active || 0,
        onItemClick: (index) => {
            console.log(index);
            setActive(index);
            onSelect(index);
        },
    };

    const classes = classNames("lay__menu", {
        [`lay__menu--${mode}`]: mode,
        className,
    });

    const renderChildren = () => {
        return Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, {
                    index,
                });
            }
            console.error("Menu组件内只能插入MenuItem");
        });
    };

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={MenuContextValue}>{renderChildren()}</MenuContext.Provider>
        </ul>
    );
};

Menu.defaultProps = {
    mode: "horizontal",
    defaultIndex: 0,
};

export default Menu;
