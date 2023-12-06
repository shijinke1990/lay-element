import React, { createContext, useState } from "react";
import classNames from "classnames";
import "./Menu.scss";
import { MenuItemProps } from "./MenuItem";

export type MenuMode = "horizontal" | "vertical";

export type MenuProps = {
    defaultIndex?: string;
    className?: string;
    style?: React.CSSProperties;
    defaultOpenSubMenus?: string[];
    onSelect?: (index: string) => void;
    mode?: MenuMode;
    children?: React.ReactNode;
};

export type MenuContextProps = {
    activeIndex: string;
    defaultOpenSubMenus?: string[];
    onItemClick?: (index: string) => void;
    mode?: MenuMode;
};

export const MenuContext = createContext<MenuContextProps>({
    activeIndex: "0",
});

const Menu: React.FC<MenuProps> = ({ defaultIndex, children, className, style, defaultOpenSubMenus, onSelect, mode }) => {
    const [active, setActive] = useState(defaultIndex);
    const menuContextValue: MenuContextProps = {
        activeIndex: active || "0",
        mode,
        onItemClick: (index) => {
            console.log(index);
            setActive(index);
            if (onSelect) {
                onSelect(index);
            }
        },
        defaultOpenSubMenus,
    };

    const classes = classNames("lay__menu", {
        [`lay__menu--${mode}`]: mode,
        className,
    });

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            if (childElement.type.displayName === "MenuItem" || childElement.type.displayName === "SubMenu") {
                return React.cloneElement(childElement, {
                    index: index.toString(),
                });
            }
            console.error("Menu组件内只能插入MenuItem");
        });
    };

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={menuContextValue}>{renderChildren()}</MenuContext.Provider>
        </ul>
    );
};

Menu.defaultProps = {
    mode: "horizontal",
    defaultIndex: "0",
    defaultOpenSubMenus: [],
};

export default Menu;
